# Build a tree and display it

## Input

A flat list of items, each item can have a parent id or not

```json
[
  { "id": "uuid#1", "name": "item1", "parent": "uuid#3" },
  { "id": "uuid#2", "name": "item2" },
  { "id": "uuid#3", "name": "item3", "parent": "uuid#2" }
]
```

## Output

A tree representing items hierarchy based on parent id, items can have children, and children can have their own children, etc

```json
[
  {
    "id": "uuid#2",
    "name": "item2",
    "children": [
      {
        "id": "uuid#3",
        "name": "item3",
        "children": [{ "id": "uuid#1", "name": "item1" }]
      }
    ]
  }
]
```

## Instructions

- Transform the list into a tree
- Display the tree with React
- Each item node is collapsible and collapsed by default

_Try to follow good practices that you know in JavaScript/Typescript and React, and think about tests ;)_
