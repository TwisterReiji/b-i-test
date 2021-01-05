let m=[
    {
        name:"Arsenal",
        points:99,
        GD:45,
    },
    {
        name:"Chelsea",
        points:75,
        GD:39,
    },
    {
        name:"Manchester United",
        points:60,
        GD:29,
    },
    {
        name:"Liverpool",
        points:88,
        GD:39,
    },
]
console.log(m);
for (let i = 0; i < m.length; i++) {
    const team=m[i]
    for (const key in team) {
        let value=team[key];
        console.log(`${key}:${value}`);
        
    }
}


