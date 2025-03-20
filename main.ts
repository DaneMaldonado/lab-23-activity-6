let i: number;
let s: Sprite;
//  Step 1: Create a custom image
let my_image = img`
    . . . . c c c b b b b b . . . .
    . . c c b 4 4 4 4 4 4 b b b . .
    . c c 4 4 4 4 4 5 4 4 4 4 b c .
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e .
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e
    . e b 4 4 4 4 4 5 4 4 4 4 b e .
    8 7 e e b 4 4 4 4 4 4 b e e 6 8
    8 7 2 e e e e e e e e e e 2 7 8
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e
    e b e 8 8 c c 8 8 c c c 8 e b e
    e e b e c c e e e e e c e b e e
    . e e b b 4 4 4 4 4 4 4 4 e e .
    . . . c c c c c e e e e e . . .
`
//  Step 2: Draw a single sprite on the screen
let sprite1 = sprites.create(my_image, SpriteKind.Player)
sprite1.setPosition(75, 30)
//  Step 3: Draw a second sprite to the right of the first sprite
let sprite2 = sprites.create(my_image, SpriteKind.Player)
sprite2.setPosition(80 + my_image.width, 30)
//  Step 4: Draw the two sprites using a for loop
for (i = 0; i < 2; i++) {
    //  Start with i = 0 and i = 1
    s = sprites.create(my_image, SpriteKind.Player)
    s.setPosition(20 + i * my_image.width, 60)
}
//  Step 5: Create a row of sprites across the screen
while (i * my_image.width < screen.width) {
    s = sprites.create(my_image, SpriteKind.Player)
    s.setPosition(i * my_image.width + my_image.width / 2, 10)
    i += 1
}
