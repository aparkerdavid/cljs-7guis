# 7 GUIs in ClojureScript

## Counter

This one isn't too hard.

## Temperature Converter

### Design Notes

The input should only update if it contains a valid float.

If the current state of the form is "12" and the user wants to change it to "-52", they will to go through an intermediary state of "" (the empty string). =js/parseFloat= parses "" as =NaN=.

Something similar happens if the current state of the form is "2" and the user wants it to be "2.5". =js/parseFloat= parses the "2." as "2". The user will be unable to enter a decimal point!

To solve this, we need to validate the user's input, and only update the ratom that tracks the field's state if the current state of the field is valid.

In this example, =@input= tracks the state of the input field.
When =@input= is modified, the state of the field changes with it.
When the state of the field changes, =@input= only changes if the current state of the field is deemed valid.

```
[2|   ] => @input = 2   ;; @input tracks the state of the field.
[2.|  ] => @input = 2   ;; Invalid input: state did not update.
[2.5| ] => @input = 2.5 ;; Valid input: state did update.
[2.|  ] => @input = 2.5 ;; Invalid input: state did not update.
[2|   ] => @input = 2   ;; etc.
[|    ] => @input = 2
[-|   ] => @input = 2
[-1|  ] => @input = -1
[-12| ] => @input = -12
```


### Implementation Notes

## Flight Booker

### Design Notes

Validation needs to work differently here, too. Where the temperature inputs only needed to deal with two states (valid or invalid float), our date input needs a third: incomplete.

For example: neither "05/03/2" nor "99/03/2021" is a valid date input. But in the former case, it's possible (and likely) that the user is in the middle of filling in a valid date, whereas in the latter we know that the input cannot be valid.

We don't want our validator "crying wolf" as the user is trying to fill out the form. It's annoying, disrespectful ("you're doing it wrong! you're doing it wrong!") reduces our credibility in the case that there's actually something wrong with the input. Modeling an incomplete state allows us to avoid telling the user they're wrong unless we /know/ they're wrong.


### Implementation Notes

Checking for date validity:
Make a JS date object from the date string.

Check if there are any NaNs in the Day, Month, or Year fields. This will alert us to an invalid date, even if it is incomplete.

JS will "coerce" some invalid dates, e.g. Nov 11, or Feb 29 of a non-leap year will become Dec 1 or Mar 1.

FIrst: check for NaNs. If nans, invalid.
Second: check completeness. If complete...
Finally: Check coercions. If no coercions: complete. Otherwise: invalid.



## CRUD

### Design Notes

### Implementation Notes

## Circles

### Design Notes

The prompt calls for the radius adjustment control to appear in a popup window, but this is a pretty bad idea on the web.  Instead, we're going to have it replace the Undo and Redo controls, which shouldn't be usable during radius adjustment anyway.


### Implementation Notes

Add circle:
Push radius and position to circles vector.
Push circle to undo vector.
Clear redo vector.

Resize circle:
Push circle index and current radius to undo vector
Assoc the new radius onto the circle
Clear redo vector.

Undo:
Look at the last item in the undo vector.
If the radius is nil, we're undoing circle creation.
Push the circle's current radius and position to the redo vector.
Remove the last circle from the circles vector

If it's an index and a radius, we're undoing a resize:
Push the index and current radius to redo vector.
Assoc the radius from the undo vector item onto the corresponding item in the circles vector.

Redo:
Look at the last item in the redo vector.

If it's =:create= and position, we're redoing circle creation.
Remove the last item from the redo vector.
Push radius and position to circles vector.
Push =:circle= to undo vector.

If it's an index and a radius, we're redoing a resize.
Push circle index and current radius to undo vector
Assoc the new radius onto the circle


## Spreadsheet


Parts of a spreadsheet:

** Cells, each of which has:

*** a Value
The user cannot edit the Value of a cell. It is calculated by the spreadsheet based on the cell's Formula.

*** a Formula
The formula is not necessarily a "formula" in the colloquial sense, it can just be a number.

*** a list of Children
Children are the cells whose value depends upon the value of the cell in question. 
  
*** A function to calculate a Value from a Formula.

*** A function that determines a cell's Parents from its Formula.
Parents are the cells whose value the value of the cell in question is dependent upon.

*** When a cell's Formula changes:
- Determine the Cell's Parents as per the new formula.
- Follow the Parents-of-Parents of the Cell in question until we find either:
  - a Cell with no parents
  - the Cell in question
   If the Cell in question is found, reject the formula change as cyclical.
- Determine the Cell's Parents as per the old formula.
- Update the old and new parents' lists of Children accordingly.
- Recalculate cell's Value.

*** When a cell's Value is recalculated, recalculate the values of its Children, if it has them.
(This is a recursive operation.)

** A syntax for Formulas

Something Clojure-based would be easy to implement, and pleasant to use.
A subset of Clojure that omits parens for top-level forms, and allows only:

- arithmetic functions
- numbers
- keywords in :[A-Z][1-99] format (used to refer to cells)

Ex:
#+begin_src
 + 1 2

 * 1 (+ 2 2) 5

 sqrt (- :A1 (/ 5 :B2))
#+end_src


** A User Interface

Present the Cells as a grid of fields, [A-Z] x [1-99]. Traditional spreadsheet style.
Display the Value of each Cell in its corresponding field.
When the field is double-selected, display an editable readout of the Cell's Formula.
When editing:
- press Enter to commit the Formula update.
- press Escape or click elsewhere to cancel the edit.


** Solving formulas

Each node of a formula must be:
- a Number
- a Keyword
- a Function
  `+ - / * ** sqrt root`
- a List
- a String

We're not going to get into the finer points of Clojure parsing and validation (=eval= can handle that) we're just going to make sure all the tokens are OK with the subset of Clojure that we want to use.


### Design Notes

### Implementation Notes


  `eval-compiler-opts`
  "Bit of a hack here, I'll admit I don't fully understand what's going on.
  As far as I can tell, the default behavior of cljs.js/eval is to treat unqualified symbols as being namespaced under cljs.user. This creates a problem when trying to call core functions, as eval is looking for them in the cljs.user namespace rather than cljs.core. The following options map is based on cljs.js/empty-state (apparently the default) but aliases the cljs.core namespace to cljs.user, allowing core functions to be used normally. It also allows use of symbols in the app.spreadsheet (i.e. current) namespace."
