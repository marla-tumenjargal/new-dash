'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import './writing.css';

interface Article {
  id: number;
  title: string;
  author: string;
  blocks: string;
  images: string[];
  content: string;
}

export default function WritingPage() {
  const router = useRouter();
  const [expandedArticle, setExpandedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    { 
      id: 1, 
      title: "on creativity", 
      author: "design", 
      blocks: "1/4/2026", 
      images: ['/rnb2.jpg'], 
      content: `although i don't strongly consider myself a traditionally creative person (such as within the fine arts and music), i do believe that the
ability to think critically and introspectively runs far beyond silicon valley's insistence on speed, efficiency, and optimization. one such thought involves integrating creativity into computer science. and no, not in a "how can i solve this algorithm to achieve the most efficiency" or "how can i maximize cpu usage here" ways but rather in a "how can i use computer science as a tool to express design creatively?" so my thoughts on creativity are really just about expression. by no means does this mean that we should only focus on creativity when we design because it is equally important we pay attention to user needs. anyway, circling back, my thoughts on creativity are really about expression + balance.  '`
    },
    { 
      id: 2, 
      title: "is the turing test an appropriate measure of machine intelligence?", 
      author: "technology", 
      blocks: "11/28/2025", 
      images: ['/rnb.jpg'], 
      content: `<span style="color: #999;">background info! 
• turing test - proposed by Alan Turing in 1950; basically says that if a human can't tell the difference between the output of a machine and a human, then that machine has reached "human-level intelligence."
• strong ai - the idea that ai can generalize beyond specific tasks, so it has a consciousness in theory 
• weak ai - opposite of ^. idea that computers can simluate intelligence but it can only do so in specific contexts such as your tiktok recommendation algorithm, alexa, chatgpt, etc 
• syntax vs semantics - syntax is structure of symbols and semantics is its meaning. for example, think of the difference between spelling "joy" and actually feeling it</span>
    
okie, now i ask : is the turing test an appropriate measure of machine intelligence? 

as llms get better at mimicking human conversation, writing code, and passing bar exams, i've been wrestling with the question of "what defines a mind?" i naturally thought to the turing test and whether we'll ever reach a point where machines have the same capacity as human consciousness. <span class="highlight">my main thesis, perhaps, is that intelligence can not be duplicated through syntactic manipulation alone. this is because intelligence is a byproduct of the biological/chemical processes of our mind (our consciousness) and that can not be duplicated through computation alone.</span class="highlight"> in other words, the turing test can not measure internal cognition because it only measures the syntax of the output and not its semantics. 

the chinese room thought experiment backs this claim up pretty well, so let's take a look at it! 
    
in the chinese room thought experiment, John Searle (he made this thought experiment) imagines himself locked in a room. he receives mandarin chinese symbols (a "story" and "questions") through a slot, which function as inputs, and follows an english rulebook that describes how to manipulate these symbols, representing the program. the rulebook lets him correlate one set of chinese symbols with another purely based on their shapes (syntax). by following these rules, he can assemble strings of chinese symbols that form correct answers to the questions. to an outside observer, his responses appear identical to those of a fluent speaker. however, even though he can manipulate the symbols correctly and produce the correct outputs, he does not truly understand the language because his actions are based on syntax (manipulating symbols) without any care for semantics (meaning). 
    
the chinese room experiment proves that simulation does not equal duplication. an analogy i like to use is that a computer simulation of a storm is not an actual storm in real life. the turing test doesn't care about the internal mechanisms (behavior or intentionality), only about the quality of the output. therefore, understanding is not a part of the program but a causal property of the biological system (aka our brains). 

<span class="highlight">i believe this thought experiment matters a lot more than we realize when it comes to ai alignment and shaping the moral compasses of new systems as well.</span class="highlight"> `
    },
{
  id: 3,
  title: "does innovation only happen within its context? ",
  author: "philosophy",
  blocks: "9/1/2025",
  images: ['/greenblue.jpg'],
  content: `recently, i've been interested in a lot of the social dynamics behind computational thinking, such as AGI, internet systems, the turing test, and how recommendation algorithms (especially facebook and their metaverse) are evolving with time. but to understand how we've been able to develop such mind-boggling technologies, we also need to understand binary (aka the computer's language of 0s and 1s). 

so, i ask : does innovation only happen within its context? 

well, when Darwin created his Theory of Evolution, some may say that the "time was ripe." if Darwin never coined it in his place. but let's look at another example: Gregor Mendel! when he discovered the punnett square, his work was barely acknowledged. this, in part, is because he was quite ahead of his time. he combined two completely disparaging fields (math and biology) together to radically innovate (we call this radical innovation).

like Mendel, Leibniz combined two different fields (logic and algebra) to create a "language" of sorts that later became the precursor to probabilistic inference. he believed math was a language, and that private language can not exist because you can not express a concept if it does not have a name. this is why we don't have memories as babies because we can not conceptualize what we do not yet know. since math is simply a language made of symbols and signs, we can not think, reason, or compute to ourselves without language (in this case, combining math and logic to make sense of things like equations, theorems, etc). binary is only concerned with 0 and 1s, on or off.
  
one fundamental logic behind this idea are the three laws of thought. these three laws are the law of identity, law of contradiction, and the law of excluded middle. leibniz believed all knowledge is self evident, meaning that the mind itself already knows. for example, a triangle is self evident because you can't comprehend of a triangle without three sides in the same way a bachelor is by definition unmarried. empirical knowledge, however, is discovered "through" other knowledge. for example, if i say "kidney" you wouldn't intuitively associate that with "pumping blood." most empirical knowledge drives scientific knowledge since we always discovering new facts that continue creating new knowledge. now, the third law ties everything together quite beautifully because binary mirrors human thinking. in binary, it is always a 0 or a 1, on or off. <span class="highlight">just like how we can not define what "happy" or "good" is without "sadness" or "evil," we understand binary through its opposite.</span> 
  
well, if we do not think through these three laws of thought why do they matter? just as we experience and behave through them, binary operates through them! we can understand that 1) in binary, each state (0 or a 1) has a clear, unchanging state (this is the law of identity), and 2) each state can not be on and off at the same time in classical computing.
  
<span class="highlight">when we reason, we simply make a bunch of distinctions: something either is or isn't, exists or doesn't exist, is true or false. binary mirrors how we think but simply through a different lens of logic and computation.</span>

circling back, innovation isn't bound to any singular context but how well it is received does.
`
},
    {
      id: 4,
      title: "on using code as a tool for creativity",
      author: "opinion",
      blocks: "7/13/2025",
      images: ['/greenblue.jpg'],
      content: `my goal as a programmer is to write elegant code. 

but elegant code isn’t easy to write because it needs to be simple, readable, and efficient. in today's age, that often means maximizing storage, speed, and/or computational power (as we’ve seen with DeepSeek’s V0 model!). 

the idea for this entry came from an excerpt i recently read from robert martin’s "clean code." i was most surprised to learn that "the majority of costs of a software project is in the long-term maintenance.” some ways we can create elegant code is to separate functions, run tests, and slowly "clean" our code (via refactoring, minimizing classes, etc) as we go. this way, our code isn't immediately translated into gibberish that even the programmer themselves can't understand.

i never thought a book about coding would be as interesting as it was, but my main takeaways about the importance of readability resonated with me. <span class="highlight">efficient isn’t always the same as effective.</span> yes, efficient code is . . . well, efficient. but from an innately human pov, perfect code can lead to bloat and slower development cycles (cuz of unnecessary complexity and over-engineering solutions). that said, i will always give the most value to the thought process behind the code im building because i want to learn how to strike a balance between what is effective and what is efficient.

the more i continue to create and learn from others, the more i realize how much i love the "creative" aspect of computer science. that is, how creativity in code is expression. <span class="highlight">through silly side quests with nextjs (web dev!!) and some poorly solved leetcode 😭, not only am i challenging my own coding abilities by approaching problems in unconventional ways but i'm also using said code to create uniquely “human” designs + solutions.</span>

“human” is an odd way to describe a website’s frontend design, i know i know. but with the rise of ai-assisted coders (you may know them as vibe coderz), most (if not all) chatbots such as claude and chatgpt spit out generic designs that regurgitate all of the patterns it has recognized in its training data. in no way am i an expert on the llm process, <span class="highlight">but there is one thing i know for sure: the ability to think critically and introspectively about new problems is our most important tool to create better more readable code.</span>`
    },
    {
      id: 5,
      title: "on luck",
      author: "opinion",
      blocks: "7/11/2025",
      images: ['/rnb.jpg'],
      content: `<span class="highlight">preparation + opportunity = luck.</span>`
    },
    {
      id: 6,
      title: "introductory thoughts",
      author: "society",
      blocks: "7/15/2025",
      images: ['/rnb2.jpg'],
      content: `fulfillment isn't something we discover so much as something we create through attention and choice. i like to see it as <span class="highlight">all the people who inspire us, all the ideas that challenge us, the work that engages us, and through the quality of our actions</span>. perhaps this is why there is no universal formula to anything. what draws one person forward might leave another. 
`
    }
  ];

  const handleBackClick = () => {
    router.push('/');
  };

  const handleArticleToggle = (article: Article) => {
    setExpandedArticle(expandedArticle?.id === article.id ? null : article);
  };

  return (
    <div className="writing-page">
      <div className="writing-main-container">
        <div className="writing-header">
          <h2 className="writing-title">writing</h2>
          <p className="writing-description">
            general thoughts on human-centered computing, philosophy, and society.
          </p>
        </div>

        <div className="writing-grid">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className={`writing-card ${expandedArticle?.id === article.id ? 'expanded' : ''}`}
              style={{
                '--card-bg-image': article.images[0] ? `url(${article.images[0]})` : 'none'
              } as React.CSSProperties}
            >
              <div 
                className="writing-card-header"
                onClick={() => handleArticleToggle(article)}
              >
                <div className="writing-card-content">
                  <div className="writing-card-text">
                    <h3 className="writing-card-title">{article.title}</h3>
                    <p className="writing-card-author">{article.author}</p>
                    <p className="writing-card-meta">{article.blocks}</p>
                  </div>
                </div>
                
                <div className="writing-card-toggle">
                  {expandedArticle?.id === article.id ? '−' : '+'}
                </div>
              </div>
              
              {expandedArticle?.id === article.id && (
                <div className="writing-card-expanded">
                  <div 
                    className="writing-card-full-text"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
