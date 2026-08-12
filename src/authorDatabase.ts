export interface AuthorBook {
  title: string;
  category: string;
  price: number;
  image: string;
  issn: string;
  description: string;
  rating: number;
}

export interface AuthorProfile {
  name: string;
  role: string;
  institution: string;
  publications: number;
  citations: string;
  bio: string;
  avatar: string;
  books: AuthorBook[];
}

export const authorDatabase: Record<string, AuthorProfile> = {
  "William Shakespeare": {
    name: "William Shakespeare",
    role: "Master Playwright & English Renaissance Poet",
    institution: "The Globe Theatre & King's Men Guild",
    publications: 39,
    citations: "2,500,000+",
    bio: "Widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist, creator of timeless tragedies, comedies, and historic masterworks.",
    avatar: "🎭",
    books: [
      {
        title: "Hamlet: Prince of Denmark",
        category: "Classic Literature",
        price: 659,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141396507",
        description: "The definitive tragic masterpiece exploring revenge, mortality, deception, and the complexities of human consciousness.",
        rating: 5.0
      },
      {
        title: "Macbeth: Tragedy of Ambition",
        category: "Classic Literature",
        price: 609,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0743477109",
        description: "A harrowing psychological exploration of unchecked political ambition, prophecy, guilt, and the supernatural.",
        rating: 4.9
      },
      {
        title: "Romeo and Juliet",
        category: "Classic Romance",
        price: 589,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0743477116",
        description: "The legendary tale of two young star-crossed lovers in Renaissance Verona whose deaths ultimately reconcile their feuding families.",
        rating: 4.9
      },
      {
        title: "Othello: The Moor of Venice",
        category: "Classic Literature",
        price: 639,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0743477550",
        description: "A powerful tragedy examining jealousy, racial identity, manipulation, and trust, orchestrated by the villainous Iago.",
        rating: 4.9
      },
      {
        title: "King Lear",
        category: "Classic Literature",
        price: 669,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0743482769",
        description: "An epic tragedy of an aging monarch who divides his kingdom among his three daughters based on flattery.",
        rating: 5.0
      },
      {
        title: "The Tempest",
        category: "Classic Literature",
        price: 579,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0743482837",
        description: "A magical romance set on a remote island where the sorcerer Prospero uses illusion to restore his daughter to her rightful place.",
        rating: 4.8
      },
      {
        title: "A Midsummer Night's Dream",
        category: "Comedy & Drama",
        price: 559,
        image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0743477543",
        description: "A whimsical comedy featuring intertwining plots between four Athenian lovers, rustic actors, and forest fairies.",
        rating: 4.9
      },
      {
        title: "Julius Caesar",
        category: "History & Tragedy",
        price: 599,
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0743482745",
        description: "A gripping political drama depicting the 44 BC conspiracy against Roman dictator Julius Caesar and the aftermath.",
        rating: 4.8
      },
      {
        title: "Twelfth Night: What You Will",
        category: "Comedy & Drama",
        price: 539,
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0743482776",
        description: "A festive romantic comedy revolving around shipwrecked twins, mistaken identities, unrequited love, and merry trickery.",
        rating: 4.8
      },
      {
        title: "The Merchant of Venice",
        category: "Classic Literature",
        price: 559,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0743477567",
        description: "A dramatic examination of justice, mercy, commerce, and religious prejudice centered around the moneylender Shylock.",
        rating: 4.7
      },
      {
        title: "The Complete Sonnets",
        category: "Poetry Collection",
        price: 769,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140424515",
        description: "All 154 poetic sonnets meditating on love, beauty, mortality, passage of time, and artistic immortality.",
        rating: 5.0
      }
    ]
  },

  "George Orwell": {
    name: "George Orwell",
    role: "Dystopian Novelist, Essayist & Social Critic",
    institution: "Tribune & BBC Literary Guild",
    publications: 15,
    citations: "1,800,000+",
    bio: "English novelist and essayist renowned for lucid prose, awareness of social injustice, opposition to totalitarianism, and outspoken advocacy of democratic socialism.",
    avatar: "👁️",
    books: [
      {
        title: "1984 (Nineteen Eighty-Four)",
        category: "Dystopian Fiction",
        price: 699,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0451524935",
        description: "The chilling depiction of Oceania's totalitarian state under Big Brother, surveillance, doublethink, and thought police.",
        rating: 5.0
      },
      {
        title: "Animal Farm: A Fairy Story",
        category: "Political Satire",
        price: 559,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0451526342",
        description: "An allegorical novella reflecting events leading up to the Russian Revolution and the totalitarian Stalinist era.",
        rating: 4.9
      },
      {
        title: "Homage to Catalonia",
        category: "Historical Memoir",
        price: 649,
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0156421171",
        description: "Orwell's firsthand personal account of fighting for the POUM militia during the Spanish Civil War.",
        rating: 4.8
      },
      {
        title: "Down and Out in Paris and London",
        category: "Memoir & Social Study",
        price: 589,
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0156262248",
        description: "A gritty exposé of transient poverty and survival working in hotel kitchens and sleeping in London shelters.",
        rating: 4.8
      },
      {
        title: "The Road to Wigan Pier",
        category: "Sociology & Labor",
        price: 629,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0156767507",
        description: "A sociological investigation into the bleak living conditions of working-class coal miners in northern England.",
        rating: 4.7
      },
      {
        title: "Burmese Days",
        category: "Historical Fiction",
        price: 579,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0156148504",
        description: "A stinging critique of British imperial rule drawn from Orwell's years in the Indian Imperial Police in Burma.",
        rating: 4.7
      },
      {
        title: "Keep the Aspidistra Flying",
        category: "Social Fiction",
        price: 559,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0156468992",
        description: "The story of Gordon Comstock's rebellion against the money-god and commercialism in 1930s London.",
        rating: 4.6
      },
      {
        title: "Coming Up for Air",
        category: "Fiction & Nostalgia",
        price: 569,
        image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0156196253",
        description: "A pre-WWII novel capturing middle-class British dread and lost Edwardian childhood tranquility.",
        rating: 4.7
      },
      {
        title: "Shooting an Elephant and Other Essays",
        category: "Essays & Journalism",
        price: 519,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141187396",
        description: "Collected landmark essays examining colonial moral dilemmas, nationalism, censorship, and personal courage.",
        rating: 4.9
      },
      {
        title: "Politics and the English Language",
        category: "Literary Criticism",
        price: 449,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141397733",
        description: "Orwell's essential masterwork on clarity in political prose and the defense against deceitful jargon.",
        rating: 5.0
      }
    ]
  },

  "Jane Austen": {
    name: "Jane Austen",
    role: "Pioneering English Realist Novelist",
    institution: "Chawton Literary Estate & Regency Guild",
    publications: 10,
    citations: "1,200,000+",
    bio: "English novelist whose romance fiction critiques the British gentry, pioneering realism, biting irony, and social commentary at the turn of the 19th century.",
    avatar: "👒",
    books: [
      {
        title: "Pride and Prejudice",
        category: "Classic Romance",
        price: 659,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141439518",
        description: "The timeless romantic drama between Elizabeth Bennet and Mr. Darcy exploring social class, first impressions, and love.",
        rating: 5.0
      },
      {
        title: "Sense and Sensibility",
        category: "Classic Literature",
        price: 609,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141439662",
        description: "The contrasting journeys of the Dashwood sisters—Elinor and Marianne—balancing rational restraint with emotional passion.",
        rating: 4.8
      },
      {
        title: "Emma: A Novel of Manners",
        category: "Classic Romance",
        price: 629,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141439587",
        description: "The witty story of handsome, clever, and rich Emma Woodhouse who loves matchmaking but misjudges her own heart.",
        rating: 4.9
      },
      {
        title: "Persuasion",
        category: "Classic Romance",
        price: 589,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141439686",
        description: "Austen's poignant mature romance of second chances between Anne Elliot and Captain Frederick Wentworth.",
        rating: 5.0
      },
      {
        title: "Mansfield Park",
        category: "Classic Literature",
        price: 599,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141439808",
        description: "Fanny Price's moral growth and steadfast integrity in the grand and complex household of her wealthy relatives.",
        rating: 4.7
      },
      {
        title: "Northanger Abbey",
        category: "Gothic Satire",
        price: 559,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141439792",
        description: "A delightful parody of 18th-century gothic romances through the imaginative eyes of Catherine Morland.",
        rating: 4.8
      },
      {
        title: "Lady Susan",
        category: "Epistolary Novella",
        price: 489,
        image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140437584",
        description: "An early epistolary novel depicting the clever, flirtatious, and self-seeking widow Lady Susan Vernon.",
        rating: 4.6
      },
      {
        title: "Sanditon: The Seaside Resort",
        category: "Classic Literature",
        price: 509,
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0199535989",
        description: "Austen's final unfinished work chronicling the eccentric residents of an emerging seaside bathing resort.",
        rating: 4.7
      },
      {
        title: "The Watsons",
        category: "Classic Literature",
        price: 449,
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140439977",
        description: "An engaging novella fragment exploring marriage economics and female independence in provincial England.",
        rating: 4.6
      },
      {
        title: "Love and Freindship & Other Youthful Writings",
        category: "Juvenilia & Parody",
        price: 489,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140437607",
        description: "Austen's riotously funny juvenile spoofs of melodramatic sentimentality written between ages 11 and 17.",
        rating: 4.8
      }
    ]
  },

  "Ernest Hemingway": {
    name: "Ernest Hemingway",
    role: "Nobel Laureate & Master of the Iceberg Theory",
    institution: "The Paris Expatriate Writers Guild",
    publications: 22,
    citations: "950,000+",
    bio: "American novelist and short-story writer whose crisp, understated style influenced 20th-century fiction globally; awarded the Nobel Prize in Literature.",
    avatar: "🎣",
    books: [
      {
        title: "The Old Man and the Sea",
        category: "Nobel Masterpiece",
        price: 589,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0684801223",
        description: "The epic story of Santiago, an aging Cuban fisherman, locked in a ferocious battle with a giant marlin far out in the Gulf Stream.",
        rating: 5.0
      },
      {
        title: "A Farewell to Arms",
        category: "War & Romance",
        price: 649,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1476764529",
        description: "A haunting romance between an American ambulance driver and a British nurse on the Italian front in World War I.",
        rating: 4.9
      },
      {
        title: "For Whom the Bell Tolls",
        category: "War Drama",
        price: 699,
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0684803357",
        description: "Robert Jordan's perilous mission to blow up a strategic bridge behind fascist lines during the Spanish Civil War.",
        rating: 4.9
      },
      {
        title: "The Sun Also Rises",
        category: "Modernist Fiction",
        price: 599,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0743297332",
        description: "The iconic quintessential portrait of the Lost Generation traveling from Paris to the Running of the Bulls in Pamplona.",
        rating: 4.8
      },
      {
        title: "A Moveable Feast",
        category: "Memoir & Paris",
        price: 579,
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1439182710",
        description: "Hemingway's warm memoir of living as a young, struggling journalist and writer in 1920s bohemian Paris.",
        rating: 4.9
      },
      {
        title: "Death in the Afternoon",
        category: "Non-Fiction & Culture",
        price: 629,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0684801452",
        description: "A treatise on the ceremony and bullfighting traditions of Spain, contemplating fear, bravery, and mortality.",
        rating: 4.7
      },
      {
        title: "Green Hills of Africa",
        category: "Adventure & Safari",
        price: 589,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0684801483",
        description: "An authentic account of a month-long big-game safari in East Africa accompanied by his wife Pauline.",
        rating: 4.6
      },
      {
        title: "The Complete Short Stories of Ernest Hemingway",
        category: "Anthology",
        price: 839,
        image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0684843322",
        description: "The definitive anthology including The Snows of Kilimanjaro, The Short Happy Life of Francis Macomber, and Hills Like White Elephants.",
        rating: 5.0
      },
      {
        title: "To Have and Have Not",
        category: "Crime & Adventure",
        price: 559,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0684818917",
        description: "Harry Morgan's desperate struggle to keep his fishing boat afloat through contraband smuggling between Key West and Havana.",
        rating: 4.6
      },
      {
        title: "Islands in the Stream",
        category: "Posthumous Fiction",
        price: 609,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0684804545",
        description: "The rich, multi-part story of artist Thomas Hudson in the Caribbean during the quiet and war-torn phases of his life.",
        rating: 4.7
      }
    ]
  },

  "Arthur Conan Doyle": {
    name: "Arthur Conan Doyle",
    role: "Pioneer of Detective Fiction & Physician",
    institution: "The Sherlock Holmes Society of London",
    publications: 30,
    citations: "1,500,000+",
    bio: "British writer and medical doctor who created the world's most renowned consulting detective, Sherlock Holmes, and his loyal chronicler Dr. John Watson.",
    avatar: "🔍",
    books: [
      {
        title: "A Study in Scarlet",
        category: "Detective Mystery",
        price: 559,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140439083",
        description: "The historic debut novel introducing Sherlock Holmes, Dr. Watson, 221B Baker Street, and the Science of Deduction.",
        rating: 4.9
      },
      {
        title: "The Hound of the Baskervilles",
        category: "Gothic Detective",
        price: 609,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141440934",
        description: "Holmes investigates the terrifying legend of a spectral, demonic hound terrorizing the foggy moors of Devon.",
        rating: 5.0
      },
      {
        title: "The Sign of the Four",
        category: "Detective Mystery",
        price: 539,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140439076",
        description: "A complex case involving stolen Agra treasure, secret pacts, poisoned darts, and Mary Morstan.",
        rating: 4.8
      },
      {
        title: "The Adventures of Sherlock Holmes",
        category: "Short Story Collection",
        price: 629,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141034355",
        description: "Twelve classic tales including A Scandal in Bohemia, The Red-Headed League, and The Speckled Band.",
        rating: 5.0
      },
      {
        title: "The Memoirs of Sherlock Holmes",
        category: "Short Story Collection",
        price: 599,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141034348",
        description: "Featuring Silver Blaze, The Musgrave Ritual, and Holmes's fateful clash with Moriarty in The Final Problem.",
        rating: 4.9
      },
      {
        title: "The Return of Sherlock Holmes",
        category: "Detective Mystery",
        price: 609,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141034331",
        description: "Holmes returns triumphantly in The Adventure of the Empty House following the Great Hiatus.",
        rating: 4.9
      },
      {
        title: "The Valley of Fear",
        category: "Detective Mystery",
        price: 579,
        image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140439090",
        description: "A gripping murder mystery connected to Professor Moriarty and a secret society in an American coal mining valley.",
        rating: 4.8
      },
      {
        title: "The Lost World: Professor Challenger",
        category: "Sci-Fi & Adventure",
        price: 589,
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140624052",
        description: "Professor Challenger's legendary expedition to an isolated South American plateau where prehistoric dinosaurs survive.",
        rating: 4.8
      },
      {
        title: "His Last Bow: War Epilogue",
        category: "Detective & Espionage",
        price: 559,
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141034324",
        description: "Eight espionage and detective mysteries culminating in Holmes thwarting a German spy ring on the eve of WWI.",
        rating: 4.7
      },
      {
        title: "The Case-Book of Sherlock Holmes",
        category: "Short Story Collection",
        price: 579,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141034317",
        description: "The final twelve investigations authored by Doyle including The Illustrious Client and The Lion's Mane.",
        rating: 4.7
      }
    ]
  },

  "Agatha Christie": {
    name: "Agatha Christie",
    role: "The Queen of Crime & Master Mystery Novelist",
    institution: "The Detection Club of London",
    publications: 66,
    citations: "2,000,000+",
    bio: "The best-selling fiction novelist of all time according to Guinness World Records, famous for brilliant whodunit puzzles starring Hercule Poirot and Miss Marple.",
    avatar: "🗝️",
    books: [
      {
        title: "And Then There Were None",
        category: "Mystery & Suspense",
        price: 629,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0062073488",
        description: "Ten strangers invited to an isolated island mansion are eliminated one by one following a nursery rhyme.",
        rating: 5.0
      },
      {
        title: "Murder on the Orient Express",
        category: "Hercule Poirot Mystery",
        price: 589,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0062073495",
        description: "Hercule Poirot must solve the baffling murder of an American tycoon aboard a snowbound luxury train.",
        rating: 5.0
      },
      {
        title: "The Murder of Roger Ackroyd",
        category: "Hercule Poirot Mystery",
        price: 609,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0062073563",
        description: "A genre-defining mystery featuring one of the most astonishing twist endings in detective literature history.",
        rating: 5.0
      },
      {
        title: "Death on the Nile",
        category: "Hercule Poirot Mystery",
        price: 579,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0062073556",
        description: "A glamorous holiday aboard an Egyptian river steamer turns deadly when an heiress is found shot.",
        rating: 4.9
      },
      {
        title: "The ABC Murders",
        category: "Hercule Poirot Mystery",
        price: 559,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0062073587",
        description: "A serial killer taunts Poirot with alphabetical letters before murdering victims across England.",
        rating: 4.8
      },
      {
        title: "The Mysterious Affair at Styles",
        category: "Debut Novel",
        price: 519,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0062073532",
        description: "Christie's very first detective novel introducing Hercule Poirot, Captain Hastings, and Inspector Japp.",
        rating: 4.7
      },
      {
        title: "A Murder Is Announced: Miss Marple",
        category: "Miss Marple Mystery",
        price: 559,
        image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0062073662",
        description: "A notice in the village newspaper announces a murder will take place at 6:30 PM at Little Paddocks.",
        rating: 4.9
      },
      {
        title: "The Body in the Library",
        category: "Miss Marple Mystery",
        price: 539,
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0062073624",
        description: "Miss Marple untangles the murder of a dance hostess discovered in Colonel Bantry's library.",
        rating: 4.8
      },
      {
        title: "Crooked House",
        category: "Standalone Mystery",
        price: 569,
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0062073501",
        description: "Christie's personal favorite work exploring poisonous family secrets inside a sprawling three-gabled mansion.",
        rating: 4.9
      },
      {
        title: "Curtain: Poirot's Last Case",
        category: "Hercule Poirot Mystery",
        price: 599,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0062073860",
        description: "The dramatic final case where an aged Poirot returns to Styles to stop an insidious master manipulator.",
        rating: 4.9
      }
    ]
  },

  "Leo Tolstoy": {
    name: "Leo Tolstoy",
    role: "Titan of Russian Realism & Moral Philosopher",
    institution: "Yasnaya Polyana Literary Estate",
    publications: 40,
    citations: "1,900,000+",
    bio: "Russian master novelist and moral thinker whose monumental works War and Peace and Anna Karenina stand at the summit of world literature.",
    avatar: "📜",
    books: [
      {
        title: "War and Peace",
        category: "Epic Historical Novel",
        price: 939,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1400079988",
        description: "The panoramic epic detailing five aristocratic Russian families through Napoleon's 1812 invasion.",
        rating: 5.0
      },
      {
        title: "Anna Karenina",
        category: "Classic Literature",
        price: 789,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0143035008",
        description: "A monumental tragedy of passionate love, adultery, social hypocrisy, and spiritual redemption in imperial Russia.",
        rating: 5.0
      },
      {
        title: "The Death of Ivan Ilyich",
        category: "Philosophical Novella",
        price: 519,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0307951205",
        description: "A profound novella contemplating mortality, bourgeois shallowness, and the true meaning of a genuine life.",
        rating: 4.9
      },
      {
        title: "Resurrection",
        category: "Social Novel",
        price: 659,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0199540242",
        description: "Tolstoy's final major novel addressing judicial injustice, penal exile in Siberia, and moral rebirth.",
        rating: 4.7
      },
      {
        title: "Childhood, Boyhood, Youth",
        category: "Autobiographical Trilogy",
        price: 609,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140449921",
        description: "Semi-autobiographical trilogy tracing the emotional awakening and psychological growth of young Nikolenka.",
        rating: 4.6
      },
      {
        title: "Hadji Murat",
        category: "Historical Novella",
        price: 559,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0307951212",
        description: "The gripping tale of an Avar rebel leader navigating treacherous alliances during the Caucasian War.",
        rating: 4.9
      },
      {
        title: "The Kingdom of God Is Within You",
        category: "Philosophy & Pacifism",
        price: 629,
        image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0803294042",
        description: "Tolstoy's seminal treatise advocating nonviolent resistance, which deeply influenced Mahatma Gandhi and Martin Luther King Jr.",
        rating: 5.0
      },
      {
        title: "The Cossacks: A Tale of 1852",
        category: "Adventure & Realism",
        price: 579,
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140449594",
        description: "A disillusioned young nobleman joins the army in the Caucasus, discovering natural vigor and unadorned life.",
        rating: 4.7
      },
      {
        title: "The Kreutzer Sonata",
        category: "Psychological Novella",
        price: 509,
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140444582",
        description: "A provocative novella dissecting sexual jealousy, marital dysfunction, and Beethoven's music.",
        rating: 4.6
      },
      {
        title: "What Is Art? & Essays on Aesthetics",
        category: "Aesthetics & Essays",
        price: 589,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140446425",
        description: "A passionate critique of elitist aesthetic theories, asserting art's duty is moral transmission of universal brotherhood.",
        rating: 4.6
      }
    ]
  },

  "Fyodor Dostoevsky": {
    name: "Fyodor Dostoevsky",
    role: "Master of the Psychological Novel & Existentialist Pioneer",
    institution: "Saint Petersburg Literary Guild",
    publications: 35,
    citations: "2,100,000+",
    bio: "Russian literary titan whose profound psychological explorations of faith, guilt, nihilism, and free will fundamentally shaped modern world thought.",
    avatar: "🕯️",
    books: [
      {
        title: "Crime and Punishment",
        category: "Psychological Masterpiece",
        price: 769,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0143107637",
        description: "The intense psychological drama of impoverished student Raskolnikov who murders a pawnbroker and suffers spiritual torment.",
        rating: 5.0
      },
      {
        title: "The Brothers Karamazov",
        category: "Philosophical Epic",
        price: 859,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0374528379",
        description: "A passionate philosophical inquiry into God, morality, and patricide centered around three very different brothers.",
        rating: 5.0
      },
      {
        title: "Notes from Underground",
        category: "Existentialist Classic",
        price: 559,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0679734529",
        description: "The alienated diary of a retired civil servant in St. Petersburg, considered the first existentialist novel.",
        rating: 4.9
      },
      {
        title: "The Idiot",
        category: "Classic Literature",
        price: 699,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0375702242",
        description: "Prince Myshkin, a gentle, saintly man, enters corrupt St. Petersburg high society with tragic consequences.",
        rating: 4.9
      },
      {
        title: "Demons (The Possessed)",
        category: "Political Masterpiece",
        price: 769,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0679734512",
        description: "A prophetic political satire depicting revolutionary nihilism, radical conspiracies, and societal unraveling.",
        rating: 4.8
      },
      {
        title: "The House of the Dead",
        category: "Semi-Autobiographical Memoir",
        price: 609,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140444568",
        description: "A harrowing portrait of life in a Siberian prison camp based on Dostoevsky's own four years of penal servitude.",
        rating: 4.8
      },
      {
        title: "The Gambler",
        category: "Psychological Novella",
        price: 519,
        image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140447385",
        description: "An exhilarating study of gambling compulsion and romantic obsession in a German casino resort town.",
        rating: 4.7
      },
      {
        title: "Poor Folk",
        category: "Epistolary Debut",
        price: 489,
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140445053",
        description: "Dostoevsky's breakthrough debut novella written in letters between a copyist clerk and a sewing girl.",
        rating: 4.6
      },
      {
        title: "White Nights: A Sentimental Story",
        category: "Romantic Novella",
        price: 449,
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141441405",
        description: "A delicate, bittersweet romance occurring across four luminous midsummer nights in St. Petersburg.",
        rating: 4.9
      },
      {
        title: "The Double: A Petersburg Poem",
        category: "Psychological Novella",
        price: 509,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140447385",
        description: "A bureaucrat encounters his exact doppelgänger who proceeds to take over his career, friends, and sanity.",
        rating: 4.7
      }
    ]
  },

  "Charles Dickens": {
    name: "Charles Dickens",
    role: "Victorian Literary Giant & Social Reformer",
    institution: "The Dickens Fellowship of London",
    publications: 35,
    citations: "1,750,000+",
    bio: "English writer whose unforgettable characters, vivid storytelling, and relentless advocacy for social justice defined Victorian literature and popular culture.",
    avatar: "🎩",
    books: [
      {
        title: "Great Expectations",
        category: "Victorian Classic",
        price: 649,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141439563",
        description: "The coming-of-age journey of the orphan Pip, the eccentric Miss Havisham, Estella, and the convict Magwitch.",
        rating: 5.0
      },
      {
        title: "A Tale of Two Cities",
        category: "Historical Classic",
        price: 629,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141439600",
        description: "The stirring historical epic set in London and Paris during the bloody turmoil of the French Revolution.",
        rating: 4.9
      },
      {
        title: "Oliver Twist: The Parish Boy's Progress",
        category: "Social Realism",
        price: 589,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141439747",
        description: "An orphan boy escapes a workhouse and falls in with Fagin's gang of juvenile pickpockets in London.",
        rating: 4.9
      },
      {
        title: "A Christmas Carol in Prose",
        category: "Holiday Classic",
        price: 509,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141393001",
        description: "The classic transformation of Ebenezer Scrooge through visits from the ghosts of Christmas Past, Present, and Yet to Come.",
        rating: 5.0
      },
      {
        title: "David Copperfield",
        category: "Victorian Classic",
        price: 739,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141439440",
        description: "Dickens's personal favorite novel, following David Copperfield from unhappy childhood to prosperous author.",
        rating: 4.9
      },
      {
        title: "Bleak House",
        category: "Satire & Mystery",
        price: 789,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141439723",
        description: "A monumental satire on the Court of Chancery legal gridlock interwoven with a murder mystery.",
        rating: 4.9
      },
      {
        title: "Hard Times: For These Times",
        category: "Industrial Fiction",
        price: 559,
        image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141439679",
        description: "A critique of industrial utilitarianism and harsh factory conditions in the fictional town of Coketown.",
        rating: 4.7
      },
      {
        title: "The Pickwick Papers",
        category: "Comic Picaresque",
        price: 679,
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140436112",
        description: "Dickens's first published novel recounting the humorous misadventures of Samuel Pickwick and club members.",
        rating: 4.7
      },
      {
        title: "Our Mutual Friend",
        category: "Victorian Masterpiece",
        price: 809,
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140434972",
        description: "A dark, intricate panorama of London society revolving around a fortune derived from city dust mounds.",
        rating: 4.8
      },
      {
        title: "Nicholas Nickleby",
        category: "Victorian Classic",
        price: 699,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140435122",
        description: "Nicholas Nickleby fights to support his mother and sister after his father's death, exposing abusive Yorkshire boarding schools.",
        rating: 4.8
      }
    ]
  },

  "Stephen King": {
    name: "Stephen King",
    role: "Master of Modern Horror, Suspense & Supernatural Fiction",
    institution: "Bangor Maine Writers Workshop",
    publications: 65,
    citations: "1,600,000+",
    bio: "American author of contemporary horror, suspense, science fiction, and fantasy whose iconic bestsellers have sold more than 350 million copies.",
    avatar: "⚡",
    books: [
      {
        title: "The Shining",
        category: "Psychological Horror",
        price: 699,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0307743657",
        description: "Jack Torrance takes a winter caretaker job at the isolated Overlook Hotel, where supernatural forces unravel his sanity.",
        rating: 5.0
      },
      {
        title: "IT",
        category: "Supernatural Horror",
        price: 869,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1501142970",
        description: "Seven children in Derry, Maine battle a shape-shifting entity that takes the form of Pennywise the Dancing Clown.",
        rating: 4.9
      },
      {
        title: "Misery",
        category: "Psychological Thriller",
        price: 649,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1501143106",
        description: "Novelist Paul Sheldon crashes his car in a blizzard and is rescued by his obsessed 'number one fan' Annie Wilkes.",
        rating: 4.9
      },
      {
        title: "The Stand",
        category: "Apocalyptic Epic",
        price: 879,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0307743688",
        description: "A weaponized influenza strain annihilates 99% of mankind, sparking an epic battle between good and evil.",
        rating: 5.0
      },
      {
        title: "Carrie",
        category: "Supernatural Debut",
        price: 589,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0307743664",
        description: "King's breakthrough debut novel about an outcast high school girl with telekinetic powers pushed past her limit at prom.",
        rating: 4.8
      },
      {
        title: "Pet Sematary",
        category: "Supernatural Horror",
        price: 629,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1501156700",
        description: "A doctor discovers an ancient burial ground deep in the Maine woods that brings back dead pets—and people—terrifyingly changed.",
        rating: 4.9
      },
      {
        title: "11/22/63",
        category: "Time Travel & Thriller",
        price: 799,
        image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1451627299",
        description: "A high school teacher discovers a portal to 1958 and embarks on a mission to prevent the assassination of JFK.",
        rating: 5.0
      },
      {
        title: "The Green Mile: The Complete Serial Novel",
        category: "Magical Realism",
        price: 679,
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1501160417",
        description: "Death row corrections officer Paul Edgecomb encounters John Coffey, an inmate possessing miraculous healing abilities.",
        rating: 5.0
      },
      {
        title: "Salem's Lot",
        category: "Vampire Horror",
        price: 609,
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0307743671",
        description: "A writer returns to his hometown of Jerusalem's Lot only to discover the residents are turning into vampires.",
        rating: 4.8
      },
      {
        title: "Different Seasons (Shawshank & The Body)",
        category: "Novella Collection",
        price: 659,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1501143489",
        description: "Four non-horror master novellas including Rita Hayworth and Shawshank Redemption, Apt Pupil, and The Body (Stand By Me).",
        rating: 5.0
      }
    ]
  },

  "Carl Sagan": {
    name: "Carl Sagan",
    role: "Professor of Astronomy & Space Sciences",
    institution: "Cornell University & NASA JPL",
    publications: 600,
    citations: "120,000+",
    bio: "World-famous astronomer, astrophysicist, and author who popularized science globally through his television series and books on planetary science and astrobiology.",
    avatar: "🌌",
    books: [
      {
        title: "Cosmos: A Personal Voyage",
        category: "Astrophysics & Astronomy",
        price: 979,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0345331359",
        description: "Carl Sagan's iconic exploration of space, human civilization, science, and the universe.",
        rating: 5.0
      },
      {
        title: "Pale Blue Dot: A Vision of the Human Future in Space",
        category: "Astronomy & Space",
        price: 859,
        image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0345376596",
        description: "A stirring vision of humanity's future among the stars, inspired by the Voyager 1 photograph of Earth.",
        rating: 5.0
      },
      {
        title: "The Demon-Haunted World: Science as a Candle in the Dark",
        category: "Science & Skepticism",
        price: 769,
        image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0345409461",
        description: "Sagan's essential manifesto on critical thinking, scientific skepticism, and debunking superstition.",
        rating: 5.0
      },
      {
        title: "Contact: A Novel",
        category: "Sci-Fi & Astronomy",
        price: 659,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0671004101",
        description: "SETI scientist Dr. Ellie Arroway detects a radio message from the star Vega transmitting plans for a mysterious machine.",
        rating: 4.9
      },
      {
        title: "The Dragons of Eden: Speculations on Human Intelligence",
        category: "Evolutionary Biology",
        price: 679,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0345346292",
        description: "Pulitzer Prize-winning inquiry exploring human brain evolution, intelligence, sleep, and prehistoric memory.",
        rating: 4.8
      },
      {
        title: "Broca's Brain: Reflections on the Romance of Science",
        category: "Science Essays",
        price: 629,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0345336897",
        description: "Thought-provoking essays on cutting-edge astronomy, human origins, and the borders of scientific understanding.",
        rating: 4.7
      },
      {
        title: "Shadows of Forgotten Ancestors",
        category: "Anthropology & Evolution",
        price: 739,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0345345950",
        description: "Co-authored with Ann Druyan, tracing the biological and behavioral origins of the human primate species.",
        rating: 4.8
      },
      {
        title: "Billions and Billions: Thoughts on Life and Death",
        category: "Science & Philosophy",
        price: 669,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0345379184",
        description: "Sagan's final book touching on planetary climate, nuclear disarmament, technology, and his personal battle with myelodysplasia.",
        rating: 4.9
      },
      {
        title: "The Cosmic Connection: An Extraterrestrial Perspective",
        category: "Astrobiology",
        price: 629,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0521783033",
        description: "A foundational work examining extraterrestrial communication, interstellar space probes, and cosmic perspectives.",
        rating: 4.8
      },
      {
        title: "Comet: Celestial Visitors",
        category: "Planetary Science",
        price: 719,
        image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0345412225",
        description: "The scientific exploration of comets, their role in delivering organic chemistry to early Earth, and cosmic collisions.",
        rating: 4.8
      }
    ]
  },

  "Yuval Noah Harari": {
    name: "Yuval Noah Harari",
    role: "Professor of History & Macro-Historian",
    institution: "Hebrew University of Jerusalem",
    publications: 28,
    citations: "85,000+",
    bio: "Historian, philosopher, and bestselling author of Sapiens, Homo Deus, and 21 Lessons for the 21st Century, exploring human cognitive evolution and future technology.",
    avatar: "🏛️",
    books: [
      {
        title: "Sapiens: A Brief History of Humankind",
        category: "History & Anthropology",
        price: 939,
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0062316097",
        description: "A groundbreaking journey through human history from ancient foraging hominids to modern technological society.",
        rating: 5.0
      },
      {
        title: "Homo Deus: A Brief History of Tomorrow",
        category: "Futurism & Philosophy",
        price: 959,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0062464316",
        description: "Investigating the future of humanity, artificial intelligence, biotechnology, and the quest for divinity.",
        rating: 4.9
      },
      {
        title: "21 Lessons for the 21st Century",
        category: "Current Affairs & Tech",
        price: 839,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0525512172",
        description: "How to maintain focus and resilience in an age of disinformation, algorithms, and rapid climate transformation.",
        rating: 4.8
      },
      {
        title: "Nexus: A Brief History of Information Networks",
        category: "Information Science",
        price: 1049,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0593734223",
        description: "Harari's latest exploration into how information networks from ancient scriptures to AI algorithms shape our reality.",
        rating: 5.0
      },
      {
        title: "Sapiens: A Graphic History Vol. 1 (The Birth of Humankind)",
        category: "Graphic History",
        price: 879,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0063051331",
        description: "A radical illustrated adaptation bringing the Cognitive Revolution to life through rich graphic storytelling.",
        rating: 4.9
      },
      {
        title: "Sapiens: A Graphic History Vol. 2 (The Pillars of Civilization)",
        category: "Graphic History",
        price: 879,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0063051355",
        description: "The illustrated chronicle of the Agricultural Revolution and the rise of cities, money, and empires.",
        rating: 4.9
      },
      {
        title: "Unstoppable Us, Volume 1: How Humans Took Over the World",
        category: "Youth Non-Fiction",
        price: 699,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0593643464",
        description: "The exciting history of how human beings became the most powerful creatures on Earth, written for younger readers.",
        rating: 4.8
      },
      {
        title: "Special Operations in the Age of Chivalry",
        category: "Military History",
        price: 1119,
        image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0851159140",
        description: "Academic historical analysis of medieval covert operations, assassinations, and special military missions.",
        rating: 4.7
      },
      {
        title: "The Ultimate Experience: Battlefield Revelations 1450-2000",
        category: "Military Philosophy",
        price: 1209,
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0230583887",
        description: "Investigating how soldiers across 500 years of combat interpreted war as an enlightening personal experience.",
        rating: 4.7
      },
      {
        title: "Renaissance Military Memoirs: War, History and Identity",
        category: "Academic History",
        price: 1229,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0851159973",
        description: "A scholarly deep dive into the emergence of personal autobiography and military identity in 16th-century Europe.",
        rating: 4.6
      }
    ]
  },

  "F. Scott Fitzgerald": {
    name: "F. Scott Fitzgerald",
    role: "Master Novelist & Jazz Age Chronicler",
    institution: "Princeton University Literature Guild",
    publications: 18,
    citations: "95,000+",
    bio: "Celebrated 20th-century American author whose novels depicted the flamboyance, idealism, and tragic excess of the Jazz Age.",
    avatar: "✍️",
    books: [
      {
        title: "The Great Gatsby",
        category: "American Classic",
        price: 629,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0743273565",
        description: "The definitive masterpiece of the Roaring Twenties, chronicling Jay Gatsby's obsessive pursuit of Daisy Buchanan in Long Island.",
        rating: 5.0
      },
      {
        title: "Tender Is the Night",
        category: "Classic Literature",
        price: 649,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0684801544",
        description: "The glamorous and tragic unraveling of psychiatrist Dick Diver and his wealthy wife Nicole on the French Riviera.",
        rating: 4.8
      },
      {
        title: "This Side of Paradise",
        category: "Debut Novel",
        price: 559,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0486289991",
        description: "Fitzgerald's dazzling debut novel that defined post-WWI youth, intellectual disillusionment, and collegiate romance at Princeton.",
        rating: 4.7
      },
      {
        title: "The Beautiful and Damned",
        category: "Jazz Age Fiction",
        price: 589,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0486421971",
        description: "The decadent marriage and squandered inheritance of Anthony and Gloria Patch in 1910s Manhattan.",
        rating: 4.6
      },
      {
        title: "The Curious Case of Benjamin Button",
        category: "Fantasy Novella",
        price: 509,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0141190228",
        description: "The whimsical story of a man born in his seventies who ages backwards throughout his life.",
        rating: 4.8
      },
      {
        title: "Tales of the Jazz Age",
        category: "Short Story Collection",
        price: 579,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0486424491",
        description: "Eleven classic stories including The Diamond as Big as the Ritz and May Day.",
        rating: 4.7
      },
      {
        title: "The Last Tycoon (The Love of the Last Tycoon)",
        category: "Hollywood Fiction",
        price: 599,
        image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0684801551",
        description: "Fitzgerald's posthumous final novel depicting studio head Monroe Stahr navigating the Golden Age of Hollywood.",
        rating: 4.7
      },
      {
        title: "Flappers and Philosophers",
        category: "Short Story Anthology",
        price: 539,
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0486414164",
        description: "Fitzgerald's first story collection featuring Bernice Bobs Her Hair and The Ice Palace.",
        rating: 4.6
      },
      {
        title: "All the Sad Young Men",
        category: "Short Story Anthology",
        price: 559,
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0486834412",
        description: "Nine mature stories composed during the writing of Gatsby, including The Rich Boy and Winter Dreams.",
        rating: 4.8
      },
      {
        title: "Babylon Revisited and Other Stories",
        category: "Short Story Anthology",
        price: 559,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0684824987",
        description: "Moving stories of post-1929 stock market crash regret, fatherhood, and moral reckoning.",
        rating: 4.9
      }
    ]
  },

  "Charles Darwin": {
    name: "Charles Darwin",
    role: "Naturalist, Geologist & Evolutionary Biologist",
    institution: "The Royal Society of London",
    publications: 25,
    citations: "1,400,000+",
    bio: "English naturalist whose scientific theory that evolution results from a process of natural selection revolutionized modern science and biology.",
    avatar: "🌱",
    books: [
      {
        title: "On the Origin of Species",
        category: "Evolutionary Biology",
        price: 869,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0451529060",
        description: "The seminal foundational text of evolutionary biology introducing natural selection and diversity of life.",
        rating: 5.0
      },
      {
        title: "The Voyage of the Beagle",
        category: "Expedition & Nature",
        price: 749,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140432688",
        description: "Darwin's fascinating personal travel journal aboard HMS Beagle across South America and the Galápagos Islands.",
        rating: 4.9
      },
      {
        title: "The Descent of Man, and Selection in Relation to Sex",
        category: "Anthropology & Evolution",
        price: 809,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0140436310",
        description: "Applying evolutionary theory to human beings, detailing human origins and sexual selection across species.",
        rating: 4.9
      },
      {
        title: "The Expression of the Emotions in Man and Animals",
        category: "Psychology & Ethology",
        price: 769,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0195112719",
        description: "Pioneering photographic study of biological basis and universal nature of facial and emotional expressions.",
        rating: 4.8
      },
      {
        title: "The Structure and Distribution of Coral Reefs",
        category: "Geology & Oceanography",
        price: 699,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0520032811",
        description: "Darwin's brilliant scientific theory explaining the gradual subsidence and formation of coral atolls.",
        rating: 4.7
      },
      {
        title: "Insectivorous Plants",
        category: "Botanical Science",
        price: 679,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0801487842",
        description: "Detailed botanical experiments on Venus flytraps, sundews, and carnivorous plant adaptations.",
        rating: 4.7
      },
      {
        title: "The Power of Movement in Plants",
        category: "Botany & Biology",
        price: 669,
        image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0801487859",
        description: "Investigating phototropism, root sensitivity, and circular plant movements (circumnutation).",
        rating: 4.6
      },
      {
        title: "The Formation of Vegetable Mould Through Earthworms",
        category: "Ecology & Soil",
        price: 609,
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0226136608",
        description: "Darwin's bestselling final book examining earthworm activity and their profound geological impact on soil.",
        rating: 4.8
      },
      {
        title: "Geological Observations on South America",
        category: "Geological History",
        price: 739,
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1406801965",
        description: "Geological field surveys on the Andes mountain uplift, earthquake fault lines, and fossil beds.",
        rating: 4.7
      },
      {
        title: "The Different Forms of Flowers on Plants of the Same Species",
        category: "Botanical Genetics",
        price: 649,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0226136653",
        description: "Groundbreaking discoveries on heterostyly, cross-pollination benefits, and botanical reproduction.",
        rating: 4.7
      }
    ]
  },

  "Stephen Hawking": {
    name: "Stephen Hawking",
    role: "Theoretical Physicist & Cosmologist",
    institution: "University of Cambridge & Perimeter Institute",
    publications: 230,
    citations: "180,000+",
    bio: "Legendary theoretical physicist and cosmologist who unraveled the physics of black hole radiation (Hawking Radiation) and the origins of the cosmos.",
    avatar: "🌌",
    books: [
      {
        title: "A Brief History of Time",
        category: "Quantum & Cosmology",
        price: 869,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0553380163",
        description: "The international record-breaking bestseller explaining the Big Bang, black holes, light cones, and the arrow of time.",
        rating: 5.0
      },
      {
        title: "The Universe in a Nutshell",
        category: "Theoretical Physics",
        price: 909,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0553802023",
        description: "A lavishly illustrated guide into supergravity, 11-dimensional M-theory, quantum holographic membranes, and time travel.",
        rating: 4.9
      },
      {
        title: "The Grand Design",
        category: "Quantum Physics",
        price: 789,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0553384666",
        description: "Co-authored with Leonard Mlodinow, arguing that quantum M-theory can explain the spontaneous creation of the multiverse.",
        rating: 4.9
      },
      {
        title: "Brief Answers to the Big Questions",
        category: "Cosmology & Philosophy",
        price: 739,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1984819192",
        description: "Hawking's final parting thoughts on AI threats, space colonization, extraterrestrial life, and human destiny.",
        rating: 5.0
      },
      {
        title: "Black Holes and Baby Universes and Other Essays",
        category: "Essays & Physics",
        price: 659,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0553374117",
        description: "Personal essays reflecting on living with ALS, the philosophy of science, thermodynamics, and black hole entropy.",
        rating: 4.8
      },
      {
        title: "The Nature of Space and Time",
        category: "Academic Physics",
        price: 819,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0691145709",
        description: "The famous historic debate between Stephen Hawking and Sir Roger Penrose on quantum gravity and general relativity.",
        rating: 4.8
      },
      {
        title: "The Large Scale Structure of Space-Time",
        category: "Monograph & Physics",
        price: 1579,
        image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0521099066",
        description: "The advanced mathematical treatise co-written with G.F.R. Ellis proving cosmological singularity theorems.",
        rating: 4.9
      },
      {
        title: "George's Secret Key to the Universe",
        category: "Science Fiction & Youth",
        price: 579,
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1416985846",
        description: "Children's science adventure written with his daughter Lucy Hawking, exploring space via a supercomputer portal.",
        rating: 4.7
      },
      {
        title: "On the Shoulders of Giants: The Great Works of Physics",
        category: "Physics Anthology",
        price: 1049,
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0762416981",
        description: "Hawking's curated collection of landmark texts by Copernicus, Galileo, Kepler, Newton, and Einstein.",
        rating: 5.0
      },
      {
        title: "My Brief History: A Memoir",
        category: "Autobiography",
        price: 599,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0345535283",
        description: "Hawking's concise, candid autobiographical account of his boyhood in Oxford and Cambridge intellectual triumphs.",
        rating: 4.8
      }
    ]
  },

  "Walter Isaacson": {
    name: "Walter Isaacson",
    role: "Professor of History & Master Biographer",
    institution: "Tulane University & Aspen Institute",
    publications: 32,
    citations: "78,000+",
    bio: "Renowned biographer and historian who authored the definitive biographies of Steve Jobs, Leonardo da Vinci, Albert Einstein, and Benjamin Franklin.",
    avatar: "📚",
    books: [
      {
        title: "Steve Jobs: The Exclusive Biography",
        category: "Technology & Biography",
        price: 979,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1451648539",
        description: "Based on more than forty interviews with Jobs conducted over two years, the definitive biography of Apple's visionary founder.",
        rating: 5.0
      },
      {
        title: "Leonardo da Vinci: The Renaissance Genius",
        category: "Art & Biography",
        price: 999,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1501139154",
        description: "Bringing Leonardo da Vinci to life based on thousands of pages from his notebooks and new discoveries about his art and science.",
        rating: 5.0
      },
      {
        title: "Einstein: His Life and Universe",
        category: "Science & Biography",
        price: 909,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0743264730",
        description: "The definitive biography examining how Einstein's rebellious scientific mind unraveled relativity, light, and gravity.",
        rating: 5.0
      },
      {
        title: "Benjamin Franklin: An American Life",
        category: "History & Biography",
        price: 839,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0684807614",
        description: "The colorful chronicle of the founding father whose wit, diplomacy, and inventions defined American character.",
        rating: 4.9
      },
      {
        title: "The Innovators: How a Group of Hackers Changed the World",
        category: "Computing & History",
        price: 889,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1476708690",
        description: "The saga of the pioneers who created the computer and internet—from Ada Lovelace and Alan Turing to Bill Gates and Larry Page.",
        rating: 4.9
      },
      {
        title: "The Code Breaker: Jennifer Doudna and Gene Editing",
        category: "Biotechnology & Science",
        price: 939,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1982115852",
        description: "The story of Nobel Prize winner Jennifer Doudna and CRISPR gene editing transforming medicine and human evolution.",
        rating: 4.9
      },
      {
        title: "Elon Musk: The Biography",
        category: "Technology & Business",
        price: 1049,
        image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1982181284",
        description: "The inside story of the polarizing innovator who propelled electric vehicles with Tesla, space flight with SpaceX, and AI.",
        rating: 4.8
      },
      {
        title: "Kissinger: A Biography",
        category: "Diplomacy & Politics",
        price: 979,
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-0743286978",
        description: "A monumental study of foreign policy, geopolitics, and Henry Kissinger's complex diplomatic legacy.",
        rating: 4.7
      },
      {
        title: "The Wise Men: Six Friends and the World They Made",
        category: "Cold War History",
        price: 949,
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1476728827",
        description: "Co-authored with Evan Thomas, profiling the architects of American post-WWII foreign policy and the Marshall Plan.",
        rating: 4.8
      },
      {
        title: "American Sketches: Great Leaders and Creative Minds",
        category: "Essays & Profiles",
        price: 699,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        issn: "ISBN 978-1439183441",
        description: "Collected biographical essays on Ronald Reagan, Bill Gates, Colin Powell, Katharine Graham, and Woody Allen.",
        rating: 4.7
      }
    ]
  }
};
