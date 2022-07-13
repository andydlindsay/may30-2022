# W07D03 - Immutable Update Patterns

### To Do
- [x] Recap: Components, Props, and State
- [x] Immutable Update Patterns with Arrays and Objects
- [x] Updating Complex State


props => data from outside of our component being passed in
state => data that belongs to the component


```html
<button>Click me!!</button>

<Button>{props.children}</Button>

<Button title="click me!" />
<Button>Click me!</Button>

```

day

days []
interviewers {}
appointments {}


bookInterview('Alice', 7);

const bookInterview = (student, interviewerId) => {
  if (!student) {
    return;
  }

  setState();
}


Application bookInterview
  -Form (intermediate state)
    -InterviewerList








