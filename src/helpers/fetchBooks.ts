import Book from '../types/book';

const books: Book[] = [
  {
    id: 1,
    title: `Harry Potter and the Philosopher's Stone`,
    author: 'J.K. Rowling',
    price: 24.99,
    genres: ['Fantasy', 'Fiction'],
    description: `Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!`,
  },
  {
    id: 2,
    title: 'Harry Potter and the Chamber of Secret',
    author: 'J.K. Rowling',
    price: 24.99,
    genres: ['Fantasy', 'Fiction'],
    description: `Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he's packing his bags, Harry receives a warning from a strange impish creature who says that if Harry returns to Hogwarts, disaster will strike.`,
  },
  {
    id: 3,
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling',
    price: 24.99,
    genres: ['Fantasy', 'Fiction'],
    description: `Harry Potter, along with his best friends, Ron and Hermione, is about to start his third year at Hogwarts School of Witchcraft and Wizardry. Harry can't wait to get back to school after the summer holidays. (Who wouldn't if they lived with the horrible Dursleys?) But when Harry gets to Hogwarts, the atmosphere is tense. There's an escaped mass murderer on the loose, and the sinister prison guards of Azkaban have been called in to guard the school...`,
  },
  {
    id: 4,
    title: 'Harry Potter and the Goblet of Fire',
    author: 'J.K. Rowling',
    price: 24.99,
    genres: ['Fantasy', 'Fiction'],
    description:
      'It is the summer holidays and soon Harry Potter will be starting his fourth year at Hogwarts School of Witchcraft and Wizardry. Harry is counting the days: there are new spells to be learnt, more Quidditch to be played, and Hogwarts castle to continue exploring. But Harry needs to be careful - there are unexpected dangers lurking...',
  },
  {
    id: 5,
    title: 'Harry Potter and the Order of Phoenix',
    author: 'J.K. Rowling',
    price: 24.99,
    genres: ['Fantasy', 'Fiction'],
    description:
      'Harry Potter is about to start his fifth year at Hogwarts School of Witchcraft and Wizardry. Unlike most schoolboys, Harry never enjoys his summer holidays, but this summer is even worse than usual. The Dursleys, of course, are making his life a misery, but even his best friends, Ron and Hermione, seem to be neglecting him.',
  },
  {
    id: 6,
    title: 'Harry Potter and the Half-Blood Prince',
    author: 'J.K. Rowling',
    price: 24.99,
    genres: ['Fantasy', 'Fiction'],
    description: `It is the middle of the summer, but there is an unseasonal mist pressing against the windowpanes. Harry Potter is waiting nervously in his bedroom at the Dursleys' house in Privet Drive for a visit from Professor Dumbledore himself. One of the last times he saw the Headmaster, he was in a fierce one-to-one duel with Lord Voldemort, and Harry can't quite believe that Professor Dumbledore will actually appear at the Dursleys' of all places. Why is the Professor coming to visit him now? What is it that cannot wait until Harry returns to Hogwarts in a few weeks' time? Harry's sixth year at Hogwarts has already got off to an unusual start, as the worlds of Muggle and magic start to intertwine...`,
  },
  {
    id: 7,
    title: 'Harry Potter and the Deathly Hollows',
    author: 'J.K. Rowling',
    price: 24.99,
    genres: ['Fantasy', 'Fiction'],
    description: `Harry has been burdened with a dark, dangerous and seemingly impossible task: that of locating and destroying Voldemort's remaining Horcruxes. Never has Harry felt so alone, or faced a future so full of shadows. But Harry must somehow find within himself the strength to complete the task he has been given. He must leave the warmth, safety and companionship of The Burrow and follow without fear or hesitation the inexorable path laid out for him...`,
  },
  {
    id: 8,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    price: 29.99,
    genres: ['Fantasy', 'Fiction'],
    description:
      'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.',
  },
  {
    id: 9,
    title: 'The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    price: 29.99,
    genres: ['Fantasy', 'Fiction'],
    description:
      'In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.',
  },
  {
    id: 10,
    title: 'The Two Towers',
    author: 'J.R.R. Tolkien',
    price: 29.99,
    genres: ['Fantasy', 'Fiction'],
    description:
      'Frodo and his Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in a battle in the Mines of Moria. And Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape, the rest of the company was attacked by Orcs. Now they continue the journey alone down the great River Anduin—alone, that is, save for the mysterious creeping figure that follows wherever they go.',
  },
  {
    id: 11,
    title: 'The Return of the King',
    author: 'J.R.R. Tolkien',
    price: 29.99,
    genres: ['Fantasy', 'Fiction'],
    description:
      'The Dark Lord has risen, and as he unleashes hordes of Orcs to conquer all Middle-earth, Frodo and Sam struggle deep into his realm in Mordor.',
  },
  {
    id: 12,
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    author: 'Gabrielle Zevin',
    price: 27.99,
    genres: ['Fiction'],
    description:
      'In this exhilarating novel, two friends--often in love, but never lovers--come together as creative partners in the world of video game design, where success brings them fame, joy, tragedy, duplicity, and, ultimately, a kind of immortality.',
  },
  {
    id: 13,
    title: 'The Maid',
    author: 'Nita Prose',
    price: 21.99,
    genres: ['Fiction', 'Historical Fiction', 'Mystery', 'Thriller'],
    description:
      'Molly Gray is not like everyone else. She struggles with social skills and misreads the intentions of others. Her gran used to interpret the world for her, codifying it into simple rules that Molly could live by.',
  },
  {
    id: 14,
    title: 'Carrie Soto Is Back',
    author: 'Taylor Jenkins Reid',
    price: 19.99,
    genres: ['Fiction', 'Historical Fiction', 'Romance', 'Sports'],
    description:
      'By the time Carrie retires from tennis, she is the best player the world has ever seen. She has shattered every record and claimed twenty Slam titles. And if you ask her, she is entitled to every one. She sacrificed nearly everything to become the best, with her father as her coach.',
  },
  {
    id: 15,
    title: 'House of Sky and Breath',
    author: 'Sarah J. Maas',
    price: 17.99,
    genres: ['Fantasy', 'Fiction', 'Romance'],
    description: `Bryce Quinlan and Hunt Athalar are trying to get back to normal―they may have saved Crescent City, but with so much upheaval in their lives lately, they mostly want a chance to relax. Slow down. Figure out what the future holds.`,
  },
  {
    id: 16,
    title: 'Book Lovers',
    author: 'Emily Henry',
    price: 17.99,
    genres: ['Fiction', 'Romance'],
    description: `Nora Stephens' life is books—she's read them all—and she is not that type of heroine. Not the plucky one, not the laidback dream girl, and especially not the sweetheart. In fact, the only people Nora is a heroine for are her clients, for whom she lands enormous deals as a cutthroat literary agent, and her beloved little sister Libby.`,
  },
  {
    id: 17,
    title: 'Sea of Tranquility',
    author: 'Emily St. John Mandel',
    price: 24.99,
    genres: ['Fantasy', 'Fiction', 'Historical Fiction', 'Science Fiction'],
    description:
      'A novel of art, time travel, love, and plague that takes the reader from Vancouver Island in 1912 to a dark colony on the moon five hundred years later, unfurling a story of humanity across centuries and space.',
  },
];

function fetchBooks(): Book[] {
  return books;
}

export default fetchBooks;
