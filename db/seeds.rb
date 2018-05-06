# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Quote.delete_all

Quote.create! (
  [
    
  {
    "quote": "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
    "author": "Ayn Rand",
    "category": "Famous"
  },
  {
    "quote": "I can write better than anybody who can write faster, and I can write faster than anybody who can write better.",
    "author": "A. J. Liebling",
    "category": "Famous"
  },
  {
    "quote": "This book fills a much-needed gap.",
    "author": "Moses Hadas in a review",
    "category": "Famous"
  },
  {
    "quote": "A mathematician is a device for turning coffee into theorems.",
    "author": "Paul Erdos",
    "category": "Famous"
  },
  {
    "quote": "The only difference between me and a madman is that I'm not mad.",
    "author": "Salvador Dali",
    "category": "Famous"
  },{
    "quote": "Never interrupt your enemy when he is making a mistake.",
    "author": "Napoleon Bonaparte",
    "category": "Famous"
  },
  {
    "quote": "If you are going through hell, keep going.",
    "author": "Sir Winston Churchill ",
    "category": "Famous"
  },
  {
    "quote": "He who has a 'why' to live, can bear with almost any 'how'.",
    "author": "Friedrich Nietzsche",
    "category": "Famous"
  },{
    "quote": "I'm all in favor of keeping dangerous weapons out of the hands of fools. Let's start with typewriters.",
    "author": "Frank Lloyd Wright",
    "category": "Famous"
  },
  {
    "quote": "I am ready to meet my Maker. Whether my Maker is prepared for the great ordeal of meeting me is another matter.",
    "author": "Sir Winston Churchill",
    "category": "Famous"
  }
]
)
puts "Quotes seeded!"
