const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
    localStorage.setItem("ToDoList", draggable.innerText);
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}

function storeCookie()
{
 var Container_Todo = document.getElementById('toDoList');
//console.log(Container_Todo.querySelectorAll('.dragging'))


}

class Stopwatch {
  constructor(display, results) {
      this.running = false;
      this.display = display;
      this.results = results;
      this.laps = [];
      this.reset();
      this.print(this.times);
  }
  
  reset() {
      this.times = [ 0, 0, 0 ];
  }
  
  start() {
      if (!this.time) this.time = performance.now();
      if (!this.running) {
          this.running = true;
          requestAnimationFrame(this.step.bind(this));
      }
  }
  
  lap() {
      let times = this.times;
      let li = document.createElement('li');
      li.innerText = this.format(times);
      this.results.appendChild(li);
  }
  
  stop() {
      this.running = false;
      this.time = null;
  }

  restart() {
      if (!this.time) this.time = performance.now();
      if (!this.running) {
          this.running = true;
          requestAnimationFrame(this.step.bind(this));
      }
      this.reset();
  }
  
  clear() {
      clearChildren(this.results);
  }
  
  step(timestamp) {
      if (!this.running) return;
      this.calculate(timestamp);
      this.time = timestamp;
      this.print();
      requestAnimationFrame(this.step.bind(this));
  }
  
  calculate(timestamp) {
      var diff = timestamp - this.time;
      // Hundredths of a second are 100 ms
      this.times[2] += diff / 10;
      // Seconds are 100 hundredths of a second
      if (this.times[2] >= 100) {
          this.times[1] += 1;
          this.times[2] -= 100;
      }
      // Minutes are 60 seconds
      if (this.times[1] >= 60) {
          this.times[0] += 1;
          this.times[1] -= 60;
      }
  }
  
  print() {
      this.display.innerText = this.format(this.times);
  }
  
  format(times) {
      return `\
${pad0(times[0], 2)}:\
${pad0(times[1], 2)}:\
${pad0(Math.floor(times[2]), 2)}`;
  }
}

function pad0(value, count) {
  var result = value.toString();
  for (; result.length < count; --count)
      result = '0' + result;
  return result;
}

function clearChildren(node) {
  while (node.lastChild)
      node.removeChild(node.lastChild);
}

let stopwatch = new Stopwatch(
  document.querySelector('.stopwatch'),
  document.querySelector('.results'));


  //3
  var quotations = [
    {
      quote  : "Experience is a hard teacher. First you get the test, and then you get the lesson.",
      author : "Brian D. Krueger"
    },
  
    {
      quote  : "No one is ever prepared for life. Those who succeed are those who pass the test before they are given the lessons.",
      author : "Unknown"
    },
  
    {
      quote  : "In the confrontation between the stream and the rock, the stream always wins,	not through strength, but through persistence.",
      author : "Unknown"
    },
  
    {
      quote  : "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      author : "Aristotle"
    },
  
    {
      quote  : "If you don't stand for something, you'll fall for anything.",
      author : "Irene Dunne"
    },
  
    {
      quote  : "If you fail to plan, you are planning to fail!",
      author : "Benjamin Franklin"
    },
  
    {
      quote  : "It's true that you don't know what you have until it's gone, but you also don't know what you've been missing until it arrives.",
      author : "Unknown"
    },
  
    {
      quote  : "Don't say you don't have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michelangelo, Mother Teresa, Leonardo da Vinci, Thomas Jefferson, and Albert Einstein.",
      author : "H. Jackson Brown"
    },
  
    {
      quote  : "Things are never so bad they can't be made worse.",
      author : "Humphrey Bogart"
    },
  
    {
      quote  : "Wise men talk because they have something to say. Fools talk because they have to say something.",
      author : "Plato"
    },
  
    {
      quote  : "It's not so much how busy you are, but why you are busy. The bee is praised. The mosquito is swatted.",
      author : "Mary O'Connor"
    },
  
    {
      quote  : "Some people stop [looking for work] because they're tired of change. Others because they're happy. And some people stop because they're being paid well enough to be unhappy.",
      author : "Mark Stanley"
    },
  
    {
      quote  : "Religion is excellent stuff for keeping common people quiet.",
      author : "Napoleon Bonaparte"
    },
  
    {
      quote  : "Extraordinary claims require extraordinary evidence",
      author : "Carl Sagan "
    },
  
    {
      quote  : "The foolish reject what they see and not what they think; the wise reject what they think and not what they see.",
      author : "Huang Po"
    },
  
    {
      quote  : "No amount of evidence will convince a sufficiently determined skeptic.",
      author : "Unknown"
    },
  
    {
      quote  : "Those who feel the need to attack other people's beliefs most certainly do not feel confident in their own.",
      author : "Unknown"
    },
  
    {
      quote  : "Persecution alone doesn't make you akin to Galileo. You must also be right.",
      author : "Unknown"
    },
  
    {
      quote  : "I finally found Jesus. He was behind the sofa the whole time.", 
      author : "Dick Fitzwell (Fark.com)"
    },
  
    { 
      quote  : "If the price is right, I'll fight a lion.",
      author : "Mike Tyson"
    },
  
    {
      quote  : "Death makes you popular. People who didn't even like you in life would come and say you were a nice guy. And flowers! You'll get more flowers than you ever got in your lifetime! Too bad it's too late.",
      author : "George Carlin"
    },
  
    {
      quote  : "Democracy is a dangerous thing when in the hands of stupid people.",
      author : "Unknown"
    },
  
    {
      quote  : "A witty saying proves nothing",
      author : "Voltaire"
    },
  
    {
      quote  : "Clothes may make the man, but they don't make the man work.",
      author : "Solid_Snake (Fark.com)"
    },
  
    {
      quote  : "In the game of global thermonuclear war, the only way to win is to not play at all.",
      author : "Joshua (War Games)"
    },
  
    {
      quote  : "The only difference between genius and stupidity is that genius has its limits.",
      author : "Albert Einstein"
    },
  
    {
      quote  : "Some people are born victims, others go out of their way to become one.",
      author : "Impaler (Fark.com)"
    },
  
    {
      quote  : "Nothing has been said about politics that hasn't already been said about hemorrhoids.",
      author : "Unknown"
    },
  
    {
      quote  : "A fanatic is someone who won't change his mind and won't change the subject.",
      author : "Winston Churchill"
    },
  
    {
      quote  : "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
      author : "Rick Cook"
    },
  
  
    {
      quote  : "France is for the French, or anyone else passing by with an army.", 
      author : "Dorf1 (Fark.com)"
    },
  
    {
      quote  : "If you always do what you always did, then you'll always get what you always got. So if nothing ever changes, nothing ever will change.",
      author : "Unknown"
    },
  
    {
      quote  : "In three words I can sum up everything I learned about life. It goes on.",
      author : "Robert Frost"
    },
  
    {
      quote  : "You see things and say 'Why?' But I dream things that never were and say 'Why not?'",
      author : "George Bernard Shaw"
    },
  
    {
      quote  : "Education is the ability to listen to almost anything without losing your temper.",
      author : "Robert Frost"
    },
  
    {
      quote  : "To acquire knowledge, one must study; but to acquire wisdom, one must observe.",
      author : "Marilyn vos Savant"
    },
  
    {
      quote  : "Intellectual brilliance is no guarantee against being dead wrong",
      author : "Unknown"
    },
  
    {
      quote  : "If you lend someone $20 and you never see them again it was probably worth it.",
      author : "Anonymous"
    },
  
    {
      quote  : "You're not really paranoid. Everyone else just thinks you are.",
      author : "Unknown"
    },
  
    {
      quote  : "Before you judge a man, try walking a mile in his shoes. That way, you'll be a mile away from him, and you'll have his shoes.",
      author : "Unknown"
    }
  ];
  
  var lastQuote = 0;
  var whichQuote = 0;
  

    // Start of with an initial quote.
    // whichQuote = Math.floor( Math.random() * quotations.length );
    // document.getElementsByClassName('quote').innerText =  quotations[ whichQuote ].quote;
    // document.getElementsByClassName('author').innerText =quotations[ whichQuote ].author  ;
    
     function gen()
      {
        
      lastQuote = whichQuote;
  
      while( lastQuote === whichQuote ) {
         whichQuote = Math.floor( Math.random() * quotations.length );
      }
  
      document.getElementById('quote').innerText =  quotations[ whichQuote ].quote;
      document.getElementById('author').innerText = quotations[ whichQuote ].author  ;
      
    console.log(quotations[ whichQuote ].quote)
    }
  