parentMap results from sort-of-dfs-L2R with for loop refactored to run from length-1 to zero

Map {
        Node { value: 45 } => Node { value: 5 },
        Node { value: 35 } => Node { value: 5 },
        Node { value: 30 } => Node { value: 5 },
        Node { value: 20 } => Node { value: 5 },
        Node { value: 10 } => Node { value: 5 },
        Node { value: 15 } => Node { value: 10 },
        Node { value: 25 } => Node { value: 15 } }

same results from Judy's original sort-of-dfs:

Map {
        Node { value: 45 } => Node { value: 5 },
        Node { value: 35 } => Node { value: 5 },
        Node { value: 30 } => Node { value: 5 },
        Node { value: 20 } => Node { value: 5 },
        Node { value: 10 } => Node { value: 5 },
        Node { value: 15 } => Node { value: 10 },
        Node { value: 25 } => Node { value: 15 } }

They're the same! This reminds me of something I read: For of provides no guarantee of the order
of itteration!  Let's try again with the for loop going from 0 to length-1...

Map {
        Node { value: 45 } => Node { value: 5 },
        Node { value: 35 } => Node { value: 5 },
        Node { value: 30 } => Node { value: 5 },
        Node { value: 20 } => Node { value: 5 },
        Node { value: 10 } => Node { value: 5 },
        Node { value: 15 } => Node { value: 10 },
        Node { value: 25 } => Node { value: 15 } }