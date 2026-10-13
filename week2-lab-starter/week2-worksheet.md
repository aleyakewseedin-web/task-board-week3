# Week 2 Lab Worksheet
Name:
Program: Software Engineering / Computer Programming
Level I aimed for today: Core / Stretch / Challenge

## Before you run the lie
What do you expect `live done` to print, and why?
   live done will print undefined; because when running the api link in the browser the done attribute is not defined with any variable
## After you run the lie
lecture example, title:undefined
live title: delectus aut autem
live done: undefined
Why did TypeScript allow this?
because in const live we asked it to treat the awaited response as task so we forced it to believe that its a task without verifying it has the attributes as task.and since its mising attributes like done instead it has completed so the type is undefined 
## typecheck
Paste the error from `src/honest.ts` before you comment the line out.
src/honest.ts:11:7 - error TS2322: Type 'unknown' is not assignable to type '{ title: string; status: "open" | "doing" | "done"; projectId: number; dueDate?: string | undefined; }'.
## Activity 1
What printed for todo 99999?
What printed for the dead address (the network error)? fetch failed due to network error
cause[bad port]
Which of those two did `fetch` throw for? network error


in stretch of the activity the 'start to fetch' appears first then 'this line runs beofre server';
this shows that whatever outside the await will be run while everything inside the fetchtodo function has to wait server to respond

## Activity 3 — Outside feed  
Paste the form boundary output (saved / refused lines).
— form boundary —
saved: {
  title: 'Design database schema',
  status: 'doing',
  projectId: 1,
  dueDate: '2026-10-20'
}
refused: String must contain at least 1 character(s)
refused: Invalid enum value. Expected 'open' | 'doing' | 'done', received 'finished'
refused: Expected number, received string
refused: Required
Paste the outside-feed output.
— outside feed —
starting fetch...
This line runs before the server answers
Got data: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
imported: {
  ok: true,
  task: { title: 'delectus aut autem', status: 'open', projectId: 1 }
}
In one sentence: why was the raw to-do refused by `createTask` even though it has a title?

## Exit question
Where is the boundary in this program, and what do you trust after the data has crossed it?
the boundary is the validaty of data that is coming into the system; If boundary is crossed the correct data is trusted and is considered.