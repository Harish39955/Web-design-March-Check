"use client";
import { Button } from "@heroui/button";
import { Pencil } from "lucide-react";
import link from "next/link";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function AboutPage() {
  let facts: string[] = [
    "Banana's DNA is 50 percent related to humans.",
    " Bananas contain a tiny amount of antimatter which is really expensive to obtain.",
    "The red dot on Jupiter is a storm that has the speed of 400 mph.",
    "No number before 1,000 contains the letter A.",
    "There were active volcanoes on the moon when dinosaurs were alive.",
    "Sudan has more pyramids than any country in the world.",
    "The human circulatory system is more than 60,000 miles long.",
    "The average person blinks 14 to 17 times per minute.",
    "Honey does not spoil.",
    "The International Space Station orbits Earth approximately every 90 minutes.",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <Button
        className="bg-green-800 text-white shadow-lg"
        onPress={() => {
          setFact(facts[Math.floor(Math.random() * facts.length)]);
        }}
      >
        Press 4 Fact
      </Button>

      <Button
        as={link}
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        href="http://localhost:3001/recipes"
      >
        <Pencil />
        Click to see my simple recipes!
      </Button>
      <p>{fact}</p>
      <br />
      <h1 className={title()}>About Me!</h1>
      <br />
      <br />
      <p>
        My Name is Harish Kumar Senthil and I am 15 years old making simple
        recipes for other people to enjoy the experiences in cooking!
      </p>
      <img alt="pic of me" height="250" src="Me.jpg" width="250" />
      <br />
      <b>
        <h2>My hobbies</h2>
      </b>
      <p>
        A favorite hobby of mine is playing sports but my favorite one is soccer
        and I have been playing for 6 years. As you know, I like to cook so that
        is also a favorite hobby of mine. Another one is reading books as it
        helps expand my knowledge.
      </p>
      <img
        alt="Soccer pitch"
        height="250"
        src="https://st3.depositphotos.com/9880800/15061/i/450/depositphotos_150617400-stock-photo-soccer-ball-on-grass.jpg"
        width="250"
      />
      <img
        alt="books"
        height="250"
        src="https://tse2.mm.bing.net/th/id/OIP.Gz6ON3JIBkwqIAepvhKTDwHaIe?rs=1&pid=ImgDetMain"
        width="250"
      />
      <b>
        <p>Some things that fascinate me!</p>
      </b>
      <img
        alt="Pic of space"
        src="https://www.publicdomainpictures.net/pictures/180000/velka/weltraum-1465833065YL1.jpg"
      />
      <p>Space!</p>
      <img
        alt="WC2026"
        src="https://logos-world.net/wp-content/uploads/2023/06/2026-FIFA-World-Cup-New-Logo.jpg"
      />
      <p>WC2026!</p>
      <br />
      <b>
        <p>My Interests!</p>
      </b>
      <p>
        What I think is cool is a lot of human anatomy of our body and I like
        the variations of systems of our biological program. I like to study
        biology as it is the study of life as this explains a lot of small to
        large scale things in many animals and humans.
      </p>
      <br />
      <h1>
        <img
          alt="Pic of Human Body"
          src="https://cff2.earth.com/uploads/2018/03/28213138/Newly-discovered-organ-may-be-the-largest-in-the-human-body.jpg"
        />
      </h1>
      <p>Pic of human body</p>
      <br />
      <p>
        Anotyher interest in general is hanging out with friends a lot as this
        is most of my social life. Hanging out with friends gives me some peace
        and relaxation. Doing stuff with friends like playing a sport together
        has me entertained for hours while calming my mind from all tough things
        at the time.
      </p>
      <img alt="My friends" src="friends.jpg" />
      <p>
        <b>Links of my interests!</b>
      </p>
      <a
        className="bg-blue-700"
        href="https://www.sutured.com/best-books-for-anatomy/?scrlybrkr=fac0b45d"
      >
        Top 10 human anatomy books
      </a>
      <br />
      <a
        className="bg-yellow-700"
        href="https://www.allrecipes.com/gallery/easy-dinner-recipes-beginners/"
      >
        20 easy recipes for beginners
      </a>
      <br />
      <a
        className="bg-red-700"
        href="https://www.uefa.com/uefachampionsleague/"
      >
        UEFA Champions league
      </a>
    </div>
  );
}
