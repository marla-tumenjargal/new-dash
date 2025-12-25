export interface BlogPost {
    id: string;
    title: string;
    year: string;
    category: string;
    content: string;
    isArchived?: boolean;
    isPasswordProtected?: boolean;
    excerpt?: string;
  }
  
  export class BlogPostsService {
    private static posts: BlogPost[] = [
  
      {
        id: 'on some universal identity',
        title: 'on some universal identity. ',
        year: '2025',
        category: 'reflections',
        content: `although i don't consider myself a rather humanities-focused person (i'm a cs major btw), i do believe i enjoy thinking introspectively and from various philosophical angles. this recent week, i began a cs program here at uc berkeley and`
      },
      {
        id: 'show me your friends, and i’ll show you your future',
        title: 'show me your friends, and i’ll show you your future',
        year: '2025',
        category: 'reflections',
        content: `the people you surround yourself with deeply shapes your mental state, your beliefs, your consciousness, and energy. `
      },
      {
        id: 'time tells us what to measure, but not what is meaningful',
        title: 'time tells us what to measure, but not what is meaningful',
        year: '2021',
        category: 'VISUAL IDENTITY',
        content: `
        flashback one year ago and you’ll find me with my head in this very computer at some cafe in Mongolia, jotting down each and every childhood memory and lesson and value i’ve ever learned and/or discovered to brainstorm my 650-word commonapp essay for college apps. and although decisions for university came out mooonths ago, i want to take a moment to reflect on timelines and how authenticity is one’s greatest power amidst competition.

before that, however, i must address competition itself. from the surface, competition is always seen as a negative emotion–just as jealousy is. yet, it is not something we can directly control within a given moment. as humans, we are all naturally wired to strive for the best and to be accepted by social groups–to adapt if you will. but at the same time, i am not dismissing competition as a good emotion either. instead, competition is best when it’s accepted and used to better one’s self, whether that be academically, spiritually, socially, career-wise (when done ethically, of course), etc. 

now, one whole year after college apps, i now realize i was attempting to package sixteen years of becoming into a neat narrative arc that would convince strangers i was worth their acceptance.

 i see competition as a double-edged sword–something that brings out all the sides of you (frustration, growth, joy, jealousy)

the moments that matter become ingrained within us—a book that changed how you think, a conversation that shifted your perspective, moments you resist picking up your phone to just clear your mind. competition taught me that everyone's timeline looks different from the inside. what appears as overnight success to an observer is usually years of invisible work, false starts, and recalibrations that never make it into the highlight reel. 

the point is: we don’t become ourselves all at once. we iterate, shift, gather data from the things we love, and the people who light us up.
authenticity becomes radical when it refuses to perform on anyone else's schedule. fulfillment isn’t something we discover so much as something we create through attention and choice. i like to see it as all the people who inspire us, all the ideas that challenge us, the work that engages us, and through the quality of our actions. perhaps this is why there is no universal formula to anything. what draws one person forward might leave another. so, after all that, if there’s one thing you take away: fulfillment isn’t something we discover so much as something we create through attention and choice. i know i’ve already written it, but it’s a motto i strive to live by.

        `
      },
      {
        id: 'raise y_our glasses (one last time!)',
        title: 'raise y_our glasses (one last time!)',
        year: '2025',
        category: 'reflections',
        content: `writing here`
      },
      {
        id: 'o',
        title: '',
        year: '2020',
        category: 'on creativity',
        content: `although i don't strongly consider myself a traditionally creative person (such as within the fine arts and music), i do believe that the ability to think 
        critically and introspectively runs far beyond silicon valley's insistence on speed, efficiency, and optimization.  
        one such thought involves integrating creativity into computer science. and no, not in a "how can i solve this 
        algorithm to achieve the most efficiency" or "how can i maximize cpu usage here" ways but rather in a "how can i use computer science as a tool to express design creatively?"
        nowaday, we are so focused on creating the most optimal algorithm to some problem or maxmizing storage, speed, and optimizing GPUs for computational power (as we've seen 
        with DeepSeek's V0 model). while such academia is deeply necessary to advancing computation, so is creating ui/ux design that is uniquely ours. 
        by creativity, i mean expression. by no means does this mean the code must be functional because the true creativty comes from experimentation and testing out different ways to 
        position elements and animations and text throughout the screen. being able to test various fonts and shapes and screen sizes and animations all contribute to a website's/design's overall
        message. 
        '`
      }
    ];
  
    static getAllPosts(): BlogPost[] {
      return [...this.posts].reverse(); 
    }
  
    static getPostById(id: string): BlogPost | undefined {
      return this.posts.find(post => post.id === id);
    }
  
    static getPostsByCategory(category: string): BlogPost[] {
      return this.posts.filter(post => post.category === category);
    }
  
    static getPostsByYear(year: string): BlogPost[] {
      return this.posts.filter(post => post.year === year);
    }
  
    static getArchivedPosts(): BlogPost[] {
      return this.posts.filter(post => post.isArchived);
    }
  
    static getActivePosts(): BlogPost[] {
      return this.posts.filter(post => !post.isArchived);
    }
  
    static addPost(post: BlogPost): void {
      this.posts.push(post);
    }
  
    static updatePost(id: string, updatedPost: Partial<BlogPost>): boolean {
      const index = this.posts.findIndex(post => post.id === id);
      if (index !== -1) {
        this.posts[index] = { ...this.posts[index], ...updatedPost };
        return true;
      }
      return false;
    }
  
    static deletePost(id: string): boolean {
      const index = this.posts.findIndex(post => post.id === id);
      if (index !== -1) {
        this.posts.splice(index, 1);
        return true;
      }
      return false;
    }
  }