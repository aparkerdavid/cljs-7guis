# 7 GUIs in ClojureScript

## Counter

This one isn't too hard.
### Design Notes

### Implementation Notes

## Temperature Converter

The input should only update if it contains a valid float.

If the current state of the form is "12" and the user wants to change it to "-52", they will to go through an intermediary state of "" (the empty string). =js/parseFloat= parses "" as =NaN=.

Something similar happens if the current state of the form is "2" and the user wants it to be "2.5". =js/parseFloat= parses the "2." as "2". The user will be unable to enter a decimal point!

To solve this, we need to validate the user's input, and only update the ratom that tracks the field's state if the current state of the field is valid.

In this example, =@input= tracks the state of the input field.
When =@input= is modified, the state of the field changes with it.
When the state of the field changes, =@input= only changes if the current state of the field is deemed valid.

#+begin_src
[2|   ] => @input = 2   ;; @input tracks the state of the field.
[2.|  ] => @input = 2   ;; Invalid input: state did not update.
[2.5| ] => @input = 2.5 ;; Valid input: state did update.
[2.|  ] => @input = 2.5 ;; Invalid input: state did not update.
[2|   ] => @input = 2   ;; etc.
[|    ] => @input = 2
[-|   ] => @input = 2
[-1|  ] => @input = -1
[-12| ] => @input = -12
#+end_src


### Design Notes

### Implementation Notes

## Flight Booker

Our temperature converter had two fields, the state of each dependent on that of the other.  In this simple scenario, it made sense to store the state as two ratoms, and allow each field to freely modify the state of the other.

Here, we have multiple inputs that each need to know the status of multiple /other/ inputs. In this scenario, it will be much simpler to bundle the full component state into a single ratom, which can be supplied to each input to read and write.

Validation needs to work differently here, too. Where the temperature inputs only needed to deal with two states (valid or invalid float), our date input needs a third: incomplete.

For example: neither "05/03/2" nor "99/03/2021" is a valid date input. But in the former case, it's possible (and likely) that the user is in the middle of filling in a valid date, whereas in the latter we know that the input cannot be valid.

We don't want our validator "crying wolf" as the user is trying to fill out the form. It's annoying, disrespectful ("you're doing it wrong! you're doing it wrong!") reduces our credibility in the case that there's actually something wrong with the input. Modeling an incomplete state allows us to avoid telling the user they're wrong unless we /know/ they're wrong.

Checking for date validity:
Make a JS date object from the date string.

Check if there are any NaNs in the Day, Month, or Year fields. This will alert us to an invalid date, even if it is incomplete.

JS will "coerce" some invalid dates, e.g. Nov 11, or Feb 29 of a non-leap year will become Dec 1 or Mar 1.

FIrst: check for NaNs. If nans, invalid.
Second: check completeness. If complete...
Finally: Check coercions. If no coercions: complete. Otherwise: invalid.

Our input forms need to be a bit more complex than in the Temperature Converter. 

It accepts a =context= prop which is expected to contain the full component state, and a =value= prop which is expected to be the key representing the state of the current input.

=flight-date-input= also allows us to pass in functions to determine if the field should be valid (a function of the field's current value) and disabled (a function of the component's state).

With =flight-date-input=, we could be moving towards a customizable general-purpose input field component.

If we wanted to, we could re-implement the Temperature Converter using =flight-date-input=. I don't think it makes sense to do that yet: It would make Temperature Conerter a bit more complex and less clear, and two different types of input field isn't too hard to keep track of. But in an application with a lot of subtly different input fields (more than the present two, at least) it might be simpler to have a single input field component that can be customized to suit many purposes.


### Design Notes

### Implementation Notes

## CRUD

### Design Notes

### Implementation Notes

## Circles


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

The prompt calls for the radius adjustment control to appear in a popup window, but this is a pretty bad idea on the web.  Instead, we're going to have it replace the Undo and Redo controls, which shouldn't be usable during radius adjustment anyway.


### Design Notes

### Implementation Notes

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
When the field is double-clicked, display an editable readout of the Cell's Formula.
When editing:
- press Enter to commit the Formula update.
- press Escape or click elsewhere to cancel the edit.


** Solving formulas

Each node of a formula must be:
- a Number
- a Keyword
- a Function
  =+ - / * ** sqrt root=
- a List

We're not going to get into the finer points of Clojure parsing and validation (=eval= can handle that) we're just going to make sure all the tokens are OK with the subset of Clojure that we want to use.


### Design Notes

### Implementation Notes