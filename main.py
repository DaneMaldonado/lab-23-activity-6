"""

SINGLE SPRITE

"""
"""

sprite1 = sprites.create(my_image, SpriteKind.player)

"""
"""

sprite1.set_position(75, 30)

"""
"""

SECOND SPRITE

"""
"""

sprite2 = sprites.create(my_image, SpriteKind.player)

"""
"""

sprite2.set_position(80 + my_image.width, 30)

"""
"""

TWO SPRITES USING LOOPS

"""
"""

for value in range(2):

"""
"""

s = sprites.create(my_image, SpriteKind.player)

"""
value = 0
# CREATE IMAGE
my_image = img("""
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
""")
while value * my_image.width < screen.width:
    setsprite = sprites.create(my_image, SpriteKind.player)
    setsprite.set_position(value * my_image.width + my_image.width / 2, 10)
    value += 1