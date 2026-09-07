const UNITS = [
  {
    id: "unit1",
    label: "Unit I",
    title: "Technical Communication Basics",
    desc: "Objectives, audience, process, document design",
    topics: [
      {
        id: "what-is-tech-comm",
        title: "What is technical communication",
        freq: "med",
        summary: "The foundational definition — technical communication is user-centered, focused on clarity and instruction, and happens through many channels and disciplines. Good background for any question that asks you to define or discuss the field itself.",
        exam: "Underpins broad definitional questions (\"what are the goals of technical communication\") like your internal-exam sample Q1.",
        html: `
          <p>Communication is the process of understanding and sharing meaning between participants — more than just transmitting information, it's a relationship that involves interaction.</p>
          <p><strong>Technical communication</strong> is any form of communication that:</p>
          <ol>
            <li>Is about technical or specialized topics</li>
            <li>Provides instructions on how to do something</li>
            <li>Happens through technology (websites, social media, etc.)</li>
          </ol>
          <p>It's a <strong>user-centered</strong> discipline: the goal is giving the right information, in the right way, at the right time, so the user's life or work is more productive. It draws on multiple disciplines (writing, editing, graphic design, instructional design, video scripting) and applies across nearly every industry — business, engineering, healthcare, manufacturing, technology.</p>

          <h4>The communication process</h4>
          <p>A sender encodes a message and sends it through a channel to a receiver (or multiple receivers). Misunderstanding can occur at <em>any</em> stage — an effective communicator understands their audience, picks the right channel, and encodes the message to minimize misreading.</p>

          <h4>Why it matters (importance)</h4>
          <ul>
            <li>Maintains client relations (follow-up letters)</li>
            <li>Keeps work on schedule (directive memos/emails)</li>
            <li>Documents completed work (progress reports)</li>
            <li>Generates income (sales letters, brochures)</li>
            <li>Keeps machinery running (user manuals)</li>
            <li>Helps you get a job (résumés)</li>
          </ul>

          <h4>Common barriers to effective communication</h4>
          <ol>
            <li><strong>Job dissatisfaction/disinterest</strong> — reduces both giving and receiving communication</li>
            <li><strong>Inability to listen</strong> — makes you assume rather than understand</li>
            <li><strong>Lack of transparency and trust</strong></li>
            <li><strong>Differing communication styles</strong> (direct vs. indirect, detailed vs. general)</li>
            <li><strong>Workplace conflict</strong></li>
            <li><strong>Cultural and language differences</strong></li>
          </ol>
        `
      },
      {
        id: "objectives",
        title: "Objectives of technical communication",
        freq: "high",
        summary: "The five goals — Clarity, Conciseness, Accuracy, Ethics, Organization — are the backbone of Unit I and reappear constantly as a framework for judging any piece of writing you produce in the exam, including your own answers.",
        exam: "Directly matches your syllabus sample Q1 (\"what are the four/five goals of technical communication\"), and Accuracy specifically appeared as an MCQ concept (\"accuracy ensures legal/safety compliance\").",
        html: `
          <p>The goals of technical communication: <strong>Clarity, Conciseness, Accuracy, Ethics, Organization.</strong></p>

          <h4>1. Clarity</h4>
          <p>The main goal. Unclear communication causes missed deadlines, damaged equipment, inaccurate procedures, and incorrectly filled orders. Achieve clarity by:</p>
          <ul>
            <li>Providing specific details</li>
            <li>Answering the reporter's questions (who, what, when, where, why, how)</li>
            <li>Using easily understandable words (avoid obscure vocabulary)</li>
            <li>Using active voice rather than passive</li>
          </ul>
          <div class="example-box"><div class="ex-label">Active vs. passive</div>
          Passive: "It has been determined that the machine was broken by John."<br>
          Active: "John broke the machine."</div>

          <h4>2. Conciseness</h4>
          <p>Saves time, improves readability, and technology demands it (short screens, quick reading). Limit word and paragraph length. Avoid two traps:</p>
          <ul>
            <li><strong>Shun words</strong> — "came to the conclusion" → conclude; "with the exception of" → except for; "utilization of" → use</li>
            <li><strong>Camouflaged words</strong> — "make an adjustment of" → adjust; "have a meeting" → meet; "for the purpose of discussing" → discuss</li>
          </ul>

          <h4>3. Accuracy</h4>
          <p>Grammatical errors destroy credibility. Proofread by: having someone else read it, letting it sit, printing it out, using tech tools, and reading it aloud.</p>

          <h4>4. Organization</h4>
          <p>Use appropriate organizational modes: analysis, spatial organization, chronology, or organization by importance — whichever helps the reader follow your content.</p>

          <h4>5. Ethics</h4>
          <p>Effective technical communication must address legalities, practicalities, and ethicalities. Six guidelines for writing ethically:</p>
          <ol>
            <li>Use language and visuals with precision (clarity)</li>
            <li>Prefer simple, direct expression (conciseness)</li>
            <li>Satisfy the audience's need for self-expression</li>
            <li>Hold yourself responsible for how well the audience understands you</li>
            <li>Respect colleagues' work (confidentiality, courtesy, copyright)</li>
            <li>Promote a climate that encourages professional judgment</li>
          </ol>
          <p>Concretely: never falsify data, never misrepresent facts, distinguish fact from opinion, don't blindly trust "experts," avoid responsibility-evading language (e.g. passive "mistakes were made"), avoid misleading jargon or euphemisms, and never violate anyone's rights.</p>
        `
      },
      {
        id: "audience",
        title: "Recognizing audience",
        freq: "high",
        summary: "Three audience types — high-tech, low-tech, lay — plus multiple audiences and multiculturalism. This is one of the most reliable recurring MCQ topics, especially the definition of a \"lay\" audience.",
        exam: "Direct MCQ match: \"lay audience\" defined as people with little or no technical knowledge — this wording has appeared near-verbatim in your MCQ collection.",
        html: `
          <p>Your <strong>audience</strong> is whoever reads your memo, blog, report, or website. Before writing, ask: who is my audience, what do they already know, what don't they know, and what do I need to say to make sure they understand?</p>

          <h4>Types of audience</h4>
          <table>
            <tr><th>Type</th><th>Who they are</th><th>What they need</th></tr>
            <tr><td><strong>High-tech</strong></td><td>Experts in your exact field — same educational background and experience</td><td>Minimal explanation; understand jargon and acronyms already</td></tr>
            <tr><td><strong>Low-tech</strong></td><td>Colleagues in other departments; familiar with the tech but not your daily work</td><td>Defined technical terms, more background information</td></tr>
            <tr><td><strong>Lay</strong></td><td>Customers/clients with no field expertise</td><td>Clear, precise, jargon-free language, simple graphics, background context</td></tr>
            <tr><td><strong>Multiple</strong></td><td>A mix of all three types receiving the same document</td><td>Define everything — jargons, abbreviations, acronyms — so all readers understand</td></tr>
          </table>

          <h4>Audience personality traits</h4>
          <p>Beyond knowledge level, consider personality — this shapes tone, visual aids, and writing style to match audience needs.</p>

          <h4>Multiculturalism guidelines</h4>
          <ul>
            <li>Define acronyms and abbreviations</li>
            <li>Avoid jargon and idioms</li>
            <li>Distinguish nouns from verbs clearly</li>
            <li>Watch for cultural biases and expectations</li>
            <li>Be careful with slash marks, humor, and puns (translation issues)</li>
            <li>Realize translations may take more or less space; consider paper size</li>
            <li>Avoid figurative language and biased language</li>
            <li>Be careful with numbers, dates, and times (formats vary by culture)</li>
          </ul>
        `
      },
      {
        id: "writing-process",
        title: "The writing process (prewrite, write, rewrite)",
        freq: "high",
        summary: "The three-stage writing process — prewriting, writing, rewriting — with prewriting's five sub-steps and the specific data-gathering methods. This structure underlies nearly every writing task question you'll face.",
        exam: "\"Reporter's questions\" and \"mind mapping\" as data-gathering methods appear directly in your syllabus sample Q1. The prewriting-stage MCQ (\"prewriting = organizing ideas and planning structure\") recurs across MCQ papers.",
        html: `
          <p>The writing process has three stages: <strong>Prewrite → Write → Rewrite.</strong></p>

          <h4>Prewriting</h4>
          <p>Understand audience needs, generate information, choose the right channel. Its objectives:</p>
          <ul>
            <li>Examine your purposes — <strong>internal motivation</strong> (you chose to write) vs. <strong>external motivation</strong> (someone asked you to)</li>
            <li>Determine your goals — to instruct, to persuade, to build trust, or to inform</li>
            <li>Consider your audience — type, diversity, and cultural issues</li>
            <li>Gather data</li>
          </ul>
          <p><strong>Ways to gather data:</strong> answering the reporter's questions, mind mapping, brainstorming/listing, outlining, storyboarding, creating organization charts, flowcharting, researching.</p>

          <h4>Writing</h4>
          <p>Package the gathered data into a draft. Organize thoughts in logical sequence — readers process one line at a time, so don't let them get lost. Traditional organizational methods: space (spatial), chronology, importance, comparison/contrast, problem/solution.</p>

          <h4>Rewriting</h4>
          <p>The most essential stage for successful communication — this is where usability gets tested. Steps: fix grammar, revise existing content, check validity/currency of information, check for new updates, re-confirm you're serving the audience, restructure via outlining, then write/edit/proofread.</p>
          <p><strong>Revision techniques:</strong> add missing details (clarity), delete dead words (conciseness), simplify complex phrasing, move information around to emphasize key ideas, reformat for accessibility, enhance tone and style, correct errors.</p>

          <h4>Why proofreading matters</h4>
          <ol>
            <li><strong>Accuracy and precision</strong> — errors in data/instructions can mislead or cause harm</li>
            <li><strong>Clarity</strong> — even small typos make text harder to understand</li>
            <li><strong>Professionalism and credibility</strong> — mistakes damage trust</li>
            <li><strong>Compliance and legal safety</strong> — critical in regulated fields (healthcare, engineering, aviation)</li>
            <li><strong>Efficiency</strong> — a polished draft avoids costly re-revisions later</li>
          </ol>

          <h4>Collaborative evaluation / usability testing</h4>
          <p>Reviewing your own text gives limited perspective — peer review catches what you can't see. Usability testing focuses on: <strong>retrievability, readability, accuracy, user satisfaction.</strong></p>
        `
      }
    ]
  },

  {
    id: "unit3",
    label: "Unit III",
    title: "Strategic / Rhetorical Communication",
    desc: "Oral communication, digital literacy, collaboration, rhetorical strategies",
    topics: [
      {
        id: "oral-presentation",
        title: "Oral presentation",
        freq: "high",
        summary: "Covers verbal/vocal/visual communication types, listening skills, presentation structure (intro/discussion/conclusion), and delivery/visual aid tips. The \"how to open a presentation\" and \"why rehearse\" points are the most exam-tested pieces.",
        exam: "Directly matches recurring MCQs: opening with a thought-provoking question or story (not reading from script), and rehearsal building smooth delivery and familiarity with content.",
        html: `
          <p>An oral presentation is a formal, structured method of delivering information or ideas by speaking — to inform, persuade, or entertain, often supported by visual aids.</p>

          <h4>Three types of communication in a presentation</h4>
          <ul>
            <li><strong>Verbal</strong> — the words you say; content, development of ideas, use of anecdotes/examples/quotes</li>
            <li><strong>Vocal</strong> — how you say it; pace and modulation</li>
            <li><strong>Visual</strong> — body language; eye contact, facial expression, posture, proximity to audience</li>
          </ul>

          <h4>Listening skills</h4>
          <p>No communication happens if you don't listen. Barriers to active listening: multitasking, preconceived notions, focusing on your own response instead of theirs, interrupting, external distractions.</p>
          <p>Tips for effective listening: stop what you're doing and concentrate, don't talk while they're speaking, make eye contact, take notes, ask clarifying questions, stay objective and open, control your reaction (a short pause lets you respond professionally).</p>

          <h4>Importance of oral communication</h4>
          <p>Simplifies complex jargon for non-technical audiences, enables real-time feedback and adjustment, builds credibility/rapport, aids decision-making, bridges cultural/professional gaps, supports collaborative problem-solving, and reinforces written materials.</p>

          <h4>Informal vs. formal presentations</h4>
          <p><strong>Informal:</strong> as a team member, manager, or in a job application setting.</p>
          <p><strong>Formal:</strong> civic club meetings, city council presentations, conference speeches, sales/promotional presentations to potential customers.</p>

          <h4>Parts of a formal oral presentation</h4>
          <ul>
            <li><strong>Introduction</strong> — table-setter for goodwill, a "road map" (thesis statement), word pictures (anecdotes/quotes/facts), <strong>opening with a question or a quotation from a famous person</strong> — not reading from a script</li>
            <li><strong>Discussion</strong> — quotes/testimony/anecdotes, data presentation, comparison/contrast, problem/solution structure, argument, chronology, coherent transitions</li>
            <li><strong>Conclusion</strong> — restate main points, leave a few follow-up questions</li>
          </ul>

          <h4>Delivery skills</h4>
          <p>Eye contact, rate, enunciation, pitch, pause, emphasis.</p>

          <h4>Visual aids / PowerPoint tips</h4>
          <ul>
            <li>Create optimal contrast; use easy-to-read fonts and sizes</li>
            <li>Limit text per slide; use headings for readability</li>
            <li>Use emphasis techniques; prepare handouts</li>
            <li><strong>Avoid reading your slides to the audience</strong> — elaborate instead</li>
            <li>Leave time for questions and comments</li>
          </ul>
        `
      },
      {
        id: "seminar",
        title: "Seminar (paper-based)",
        freq: "med",
        summary: "Defines what a seminar is, its classification (by purpose, audience, expertise level, format), and its objectives. Less directly tested than oral presentation but useful background for presentation-related questions.",
        exam: "No direct past-paper match found, but overlaps conceptually with the oral presentation process question type seen in the 2023 archive paper.",
        html: `
          <p>A seminar is a formal gathering where individuals discuss a specific topic, share knowledge, and learn from experts or peers — educational or professional in nature, used to foster learning and exchange ideas.</p>

          <h4>Purposes</h4>
          <p>Knowledge sharing, interactive learning, skill development, research presentation.</p>

          <h4>Classification of seminars</h4>
          <table>
            <tr><th>By purpose</th><th>By audience</th><th>By expertise</th><th>By format</th></tr>
            <tr><td>Academic, Professional, Training</td><td>Public, Private</td><td>Beginner, Intermediate, Advanced</td><td>Lecture, Discussion-based, Workshop-based, Panel, Online/Webinar</td></tr>
          </table>

          <h4>Paper-based seminars specifically</h4>
          <p>Traditional, in-person, face-to-face interaction, often using printed materials and multimedia. Types include academic, professional development, training, industry-specific, workshop/interactive, and motivational seminars.</p>

          <h4>Objectives</h4>
          <p>Knowledge sharing, skill development, collaboration, critical thinking, professional growth.</p>
        `
      },
      {
        id: "digital-literacy",
        title: "Digital literacy & working with the web",
        freq: "high",
        summary: "Defines digital literacy, contrasts it with mere social media use, and covers blogging, social networks, product reviews, and visual communication — matches Unit III's syllabus line almost word for word.",
        exam: "Directly answers your syllabus sample Q4 (\"is using social media the same as being digitally literate?\") — this is a near-guaranteed question type.",
        html: `
          <p><strong>Digital literacy</strong> is the ability to use digital tools effectively and responsibly — combining technical, cognitive, and communication skills. It involves online reading, writing, creating, and critical thinking.</p>

          <h4>Why it matters</h4>
          <ul>
            <li>Navigating digital platforms efficiently</li>
            <li>Evaluating credibility and accuracy of online information</li>
            <li>Communicating ethically in virtual spaces</li>
            <li>Maintaining cybersecurity and protecting data</li>
            <li>Using digital tools creatively to solve problems</li>
          </ul>
          <p>For youth specifically: educational opportunities (e-learning), career preparedness, social connectivity/advocacy, critical thinking against misinformation, and bridging socio-economic inequalities.</p>

          <h4>Working with the web</h4>
          <p><strong>Blogging</strong> — writing/publishing online content, using text/images/multimedia, following SEO and readability practices, engaging with reader feedback.</p>
          <p><strong>Social networks</strong> — building a personal/professional identity, sharing information, digital etiquette, managing your digital footprint, privacy and online reputation.</p>
          <p><strong>Product reviews</strong> — writing honest/helpful reviews, spotting fake or biased reviews, their role in e-commerce and consumer trust.</p>

          <h4>Visual communication</h4>
          <p>Using visuals (images, video, infographics, presentations) to convey ideas — enhances clarity, retention, and engagement.</p>
          <p><strong>Visual literacy skills:</strong> understanding design elements (color, contrast, balance), creating layouts with digital tools, interpreting graphs/charts, ethical use of visuals (attribution, copyright).</p>
          <p><strong>Tools:</strong> Canva/Adobe Express/Piktochart (design), PowerPoint/Google Slides/Prezi (presentation), CapCut/iMovie (video), Venngage/Easel.ly (infographics).</p>

          <div class="example-box"><div class="ex-label">Exam answer scaffold — "is social media use the same as digital literacy?"</div>
          No. Define digital literacy as the broader combination of technical/cognitive/critical-thinking skills used to evaluate, create, and navigate digital content responsibly. Social media use is often passive consumption. Argue with reasons: (1) literacy requires evaluating credibility, not just scrolling; (2) literacy includes creating and producing content, not just reacting; (3) literacy includes ethics/privacy awareness that casual use doesn't teach.</div>

          <h4>Responsible web use</h4>
          <p>Check source credibility, avoid plagiarism and misinformation, respect privacy and copyright, be mindful of your digital footprint and cyber ethics.</p>
        `
      },
      {
        id: "collaboration",
        title: "Writing with collaborators",
        freq: "med",
        summary: "Defines collaborative writing, its five stages, four models, and advantages/challenges. Directly maps to the syllabus's Unit III line and to team-message writing tasks in past papers.",
        exam: "Underpins the \"collaborative communication\" question type — e.g. the September 2024 paper's task to write a message to group members about task distribution and deadlines.",
        html: `
          <p><strong>Collaborative writing</strong> is a process where two or more people work together to plan, write, revise, and edit a document — responsibilities are shared rather than one person doing it all.</p>

          <h4>Why collaborate</h4>
          <p>Combines different expertise/perspectives, improves writing quality, saves time by dividing tasks, increases accuracy through peer review, enhances creativity and problem-solving.</p>

          <h4>Common examples</h4>
          <p>Research papers, business proposals, project reports, website content, technical manuals, grant proposals, policy documents.</p>

          <h4>Five stages</h4>
          <ol>
            <li><strong>Planning</strong> — define purpose/audience, decide who does what, set deadlines and communication methods</li>
            <li><strong>Drafting</strong> — team members write assigned sections</li>
            <li><strong>Reviewing</strong> — members read each other's work and give feedback</li>
            <li><strong>Revising</strong> — content improved based on feedback, ideas reorganized</li>
            <li><strong>Editing and proofreading</strong> — grammar/punctuation/formatting checked, final version prepared</li>
          </ol>

          <h4>Four models of collaborative writing</h4>
          <table>
            <tr><th>Model</th><th>Description</th></tr>
            <tr><td>Single author</td><td>One person writes, others review</td></tr>
            <tr><td>Sequential writing</td><td>One person writes first, passes it on</td></tr>
            <tr><td>Parallel writing</td><td>Different sections written simultaneously</td></tr>
            <tr><td>Reactive writing</td><td>Team works together, making continuous changes</td></tr>
          </table>

          <h4>Advantages vs. challenges</h4>
          <table>
            <tr><th>Advantages</th><th>Challenges</th></tr>
            <tr><td>Higher-quality documents, shared workload, diverse skills, teamwork, fewer errors via review</td><td>Conflicting ideas/styles, communication difficulties, unequal participation, scheduling problems, version control issues</td></tr>
          </table>
          <p><strong>Tools:</strong> Google Docs, Microsoft Word Online, Overleaf, Notion, Dropbox Paper.</p>
        `
      },
      {
        id: "rhetoric-intro",
        title: "Understanding rhetoric",
        freq: "high",
        summary: "The umbrella concept before the eight individual strategies — rhetoric as persuasive language use, Aristotle's triangle (ethos/pathos/logos), and the list of eight strategies. Read this before the individual strategy pages below.",
        exam: "Ethos/pathos/logos and the strategy list are recurring MCQ material; several past-paper questions ask you to analyze rhetorical strategy directly.",
        html: `
          <p><strong>Rhetoric</strong> is the art of using language effectively and persuasively, in spoken or written form — choosing words and structuring ideas to influence, inform, or entertain an audience. It's how we use language to achieve a purpose, especially to persuade.</p>

          <h4>Common uses of rhetoric</h4>
          <table>
            <tr><th>Context</th><th>How it's used</th></tr>
            <tr><td>Advertising</td><td>To make people buy something</td></tr>
            <tr><td>Political speeches</td><td>To win support or votes</td></tr>
            <tr><td>Essays/articles</td><td>To argue a point or explain persuasively</td></tr>
            <tr><td>Everyday speech</td><td>To get your way or share ideas effectively</td></tr>
          </table>

          <h4>Aristotle's rhetorical triangle — three core appeals</h4>
          <ul>
            <li><strong>Ethos</strong> (credibility) — convincing the audience the speaker is trustworthy or an authority. <em>"As a doctor with 20 years of experience, I can assure you this treatment is safe."</em></li>
            <li><strong>Pathos</strong> (emotion) — appealing to the audience's feelings. <em>"If we don't act now, thousands of children will go to bed hungry tonight."</em></li>
            <li><strong>Logos</strong> (logic) — using facts, statistics, and logical argument. <em>"Studies show students using digital tools score 20% higher."</em></li>
          </ul>

          <h4>The eight rhetorical strategies</h4>
          <p>Definitions, Description, Comparison and Contrast, Persuasion, Process Analysis, Cause and Effect, Narrative Analysis, Division and Classification — each covered as its own topic below.</p>
        `
      },
      {
        id: "persuasion",
        title: "Rhetorical strategy: Persuasion and argument",
        freq: "high",
        summary: "Distinguishes persuasion (emotional appeal) from argument (rational appeal) and covers the four audience types and three appeal categories. Directly tied to Toulmin's Model and argumentation questions.",
        exam: "Persuasion/argument distinction and its audience-type framework support Toulmin's Model questions, which have appeared repeatedly across archived papers.",
        html: `
          <p><strong>Persuasion and argument</strong> are both varieties of expository writing that try to convince readers to act, believe, or accept an idea. They sit on a spectrum:</p>
          <ul>
            <li><strong>Persuasion</strong> — relies heavily on emotional appeal and biased language (e.g. advertising, political writing)</li>
            <li><strong>Argument</strong> — relies on logical explanation and rational appeal (e.g. scientific arguments, grant proposals)</li>
          </ul>
          <p>In practice, most writing blends both, varying the balance by audience and purpose. <strong>Ceremonial discourse</strong> (inaugural speeches, graduation addresses) leans emotional on purpose — the audience already agrees and wants inspiration, not persuasion.</p>

          <h4>Purpose</h4>
          <p>Not always about "winning" — writers may want to gain support, prompt action, change attitudes, refute a theory, or arouse sympathy.</p>

          <h4>Four types of audience for argument/persuasion</h4>
          <ol>
            <li>Readers who already agree — want reinforcement, not tight logical structure</li>
            <li>Readers inclined to agree but wanting more information — accept emotional examples alongside facts</li>
            <li>Neutral readers — need carefully developed, evidence-based argument</li>
            <li>Skeptical readers — need both sides explained logically, with data and documentation</li>
          </ol>

          <h4>Three categories of appeal</h4>
          <table>
            <tr><th>Appeal</th><th>How it works</th></tr>
            <tr><td><strong>Emotional</strong></td><td>Connotative language (words like "freedom," "cowardly"), figurative language/metaphor, tone</td></tr>
            <tr><td><strong>Rational</strong></td><td>Inductive argument (evidence → conclusion) and deductive argument (generalization → specific case); cause-and-effect reasoning; comparison/analogy; testimony and citing authorities</td></tr>
            <tr><td><strong>Ethical</strong></td><td>Based on the writer's own credibility and reputation — readers trust the message because they trust the messenger</td></tr>
          </table>
        `
      },
      {
        id: "process-analysis",
        title: "Rhetorical strategy: Process analysis",
        freq: "med",
        summary: "Explains how to break down and explain a sequence of steps — the five-part structure (overview, terms, sequence, examples, results) is directly useful for writing process-flow or how-to answers in the exam.",
        exam: "No direct past MCQ hit, but the underlying skill (explaining a process step-by-step) supports oral-presentation-flowchart and internal-report questions seen in archived papers.",
        html: `
          <p>A <strong>process</strong> moves through steps to reach a result — natural or mechanical, physical or mental. <strong>Process analysis</strong> (1) divides a process into steps, (2) explains movement step-by-step, and (3) interprets each step's function.</p>

          <h4>Purpose</h4>
          <p>Two main purposes: <strong>giving directions</strong> (so readers can perform a task) and <strong>providing information</strong> (satisfying curiosity, even if the reader will never do the task themselves). Also used to show a complex process is really simple, or a simple process is actually complicated.</p>

          <h4>Audience considerations</h4>
          <p>Decide if you're writing <em>to</em> an audience (already interested, giving direct instructions) or <em>for</em> an audience (detached, general-interest explanation). Assess the knowledge gap — if readers are experts, assume shared vocabulary; if not, define everything.</p>

          <h4>Five-part structure</h4>
          <ol>
            <li><strong>Overview</strong> — define the objective, identify/number the steps, group small steps into larger units, flag which steps need most emphasis</li>
            <li><strong>Special terms</strong> — define tools/tasks/methods, either upfront or as introduced</li>
            <li><strong>Sequence of steps</strong> — don't omit steps, don't reverse steps, suspend steps where needed, don't overlook sub-steps within steps, avoid inserting steps that seem "logical" but weren't in the plan</li>
            <li><strong>Examples</strong> — pictures/diagrams, anecdotes, variants (alternative steps), comparisons to a familiar process</li>
            <li><strong>Results</strong> — assess "how do I know it's done?" and "how do I know it's good?"</li>
          </ol>
        `
      },
      {
        id: "cause-effect",
        title: "Rhetorical strategy: Cause and effect",
        freq: "med",
        summary: "Answers \"why\" through systematic explanation of causal relationships. Three main purposes and three writing strategies, plus three rules for avoiding weak causal claims — useful for essay-style Unit VI-adjacent answers too.",
        exam: "Cause-and-effect was named explicitly as a rhetorical strategy question type in the March 2025 archived paper (\"refer to any two texts to illustrate its use\").",
        html: `
          <p><strong>Cause and effect (causal analysis)</strong> explains relationships and answers "why." Modern writers investigate causes systematically rather than relying on myth — this is foundational to science, economics, education, and political writing.</p>

          <h4>Three purposes</h4>
          <ol>
            <li><strong>To inform/educate</strong> — helps readers understand and potentially control events</li>
            <li><strong>Speculative</strong> — hypothesizing about what's causing an event or what its consequences will be</li>
            <li><strong>To argue</strong> — pointing out causal relationships to persuade readers to approve or disapprove of something</li>
          </ol>

          <h4>Strategies</h4>
          <ul>
            <li>Describe an action/event, then show its consequences</li>
            <li>Describe an event, then speculate about possible reasons for it</li>
            <li>Show that an apparently simple cause-and-effect relationship is actually more complex (the real cause was overlooked)</li>
            <li>Describe an emerging trend and speculate about its future effects</li>
          </ul>

          <h4>Three rules for responsible cause-and-effect writing</h4>
          <ol>
            <li><strong>Don't overstate your case</strong> — say "X will probably cause Y," not "X necessarily causes Y"</li>
            <li><strong>Don't oversimplify</strong> — most effects have multiple causes; qualify claims with "a major cause," "one result"</li>
            <li><strong>Don't mistake coincidence for causation</strong> — avoid the "false cause" / "after this, therefore because of this" fallacy</li>
          </ol>
        `
      },
      {
        id: "narrative-analysis",
        title: "Rhetorical strategy: Narrative analysis",
        freq: "med",
        summary: "A narrative essay is a story that makes a point — covers narration's three purposes, conflict types, plot/pacing, and point of view. Directly relevant to analyzing narration technique across literary texts.",
        exam: "The September 2024 archived paper asked directly: \"Analyze how narration is utilized in [three texts]... how it contributes to each text's themes.\"",
        html: `
          <p>A <strong>narrative essay</strong> is a story that makes a point — a detailed personal account of a memorable experience, arranged chronologically by a narrator who knows what happened and what it means.</p>

          <h4>Three purposes of narration</h4>
          <ol>
            <li><strong>Introduce/illustrate</strong> a complicated subject (a personal anecdote to open an explanation)</li>
            <li><strong>Primary evidence</strong> in an extended personal essay analyzing an issue or theme</li>
            <li><strong>The subject itself</strong> — in autobiography, biography, and fiction, narrative material isn't just example, it <em>is</em> the point</li>
          </ol>

          <h4>Key structural elements</h4>
          <ul>
            <li><strong>Conflict</strong> — narrator vs. self, narrator vs. others, or narrator vs. environment</li>
            <li><strong>Plot</strong> — the sequence forming beginning/middle/end; doesn't have to be strictly chronological (can start in the middle)</li>
            <li><strong>Pace</strong> — the speed at which events are told; minor events compressed, vital events slowed down and shown as full scenes</li>
            <li><strong>Point of view</strong> — <em>person</em> (first-person "I" vs. third-person "he/she") and <em>position</em> (narrator involved in the action vs. observing from outside; telling immediately vs. years later)</li>
          </ul>
          <p>Point of view establishes the narrator's attitude — how they feel about the events — which in turn determines the story's point. A narrative essay must go somewhere, not wander aimlessly.</p>
        `
      },
      {
        id: "definitions",
        title: "Rhetorical strategy: Definitions",
        freq: "med",
        summary: "Three kinds of definitions (dictionary/lexical, stipulative, extended) plus six defining strategies. Comes with a built-in Q&A set from the source material — good for quick self-testing.",
        exam: "Definition as a rhetorical strategy is on the syllabus's named list; no direct past-paper hit found, but the concept underlies clarity-focused MCQs.",
        html: `
          <p>A <strong>definition</strong> sets boundaries for and describes the essential nature of something, distinguishing it from similar things.</p>

          <h4>Three kinds of definitions</h4>
          <ul>
            <li><strong>Dictionary (lexical)</strong> — narrow definition specifying class + distinguishing characteristic. <em>"Poetry is a literary form [class] written in meter and often rhymed [distinguishing feature]."</em></li>
            <li><strong>Stipulative</strong> — restricts a common term for a specific discussion. <em>"For this paper, I define argument as a unit of discourse in which beliefs are supported by reasons."</em></li>
            <li><strong>Extended</strong> — expands and illustrates a complex term across paragraphs, an essay, or even a book</li>
          </ul>

          <h4>Purpose</h4>
          <p>To identify, explain, entertain, persuade, instruct, or establish a standard. Writers also define to set limits for a discussion or argument, or to introduce themselves (e.g. a scholarship application defining the applicant).</p>

          <h4>Six defining strategies</h4>
          <ol>
            <li><strong>Giving examples</strong> — the most common strategy</li>
            <li><strong>Analyzing qualities</strong> — showing what's distinctive about the subject</li>
            <li><strong>Attributing characteristics</strong></li>
            <li><strong>Defining negatively</strong> — pointing out what something is <em>not</em></li>
            <li><strong>Using analogies</strong> — likening the subject to something familiar</li>
            <li><strong>Giving functions</strong> — explaining what role or purpose something serves</li>
          </ol>
          <p>Writers can also combine definition with other strategies — comparison/contrast, description, or classification.</p>
        `
      },
      {
        id: "description-rhetoric",
        title: "Rhetorical strategy: Description",
        freq: "med",
        summary: "A descriptive essay is a word-picture built from vivid, sense-appealing detail. Covers objective vs. subjective description and four core strategies — appeal to senses, special features, vivid details, and arrangement pattern.",
        exam: "Description is on the syllabus's named rhetorical-strategies list; supports literary-analysis answers that discuss how a text builds imagery or setting.",
        html: `
          <p>A <strong>descriptive essay</strong> is a word-picture of a person, place, or thing. Unlike a photograph (seen all at once), a written description is revealed gradually, word by word, appealing to the senses to build a mental image.</p>

          <h4>Two kinds of description</h4>
          <ul>
            <li><strong>Objective (technical)</strong> — provides factual information (e.g. an encyclopedia entry on volcanoes)</li>
            <li><strong>Subjective (impressionistic)</strong> — expresses the emotional/psychological impact of the subject on the writer</li>
          </ul>
          <p>Many strong descriptions combine both.</p>

          <h4>Audience considerations</h4>
          <p>Unfamiliar subjects (volcanoes) need more technical detail; familiar subjects (a lawn sprinkler) need fresh, impressionistic angles rather than basic facts the reader already has.</p>

          <h4>Four strategies</h4>
          <ol>
            <li><strong>Appeal to the senses</strong> — sight, sound, smell, taste, touch</li>
            <li><strong>Identify special features</strong> — the subject's unique characteristics</li>
            <li><strong>Select vivid details</strong> — vague description is unintelligible; details must be chosen for audience and purpose</li>
            <li><strong>Arrange details in a pattern</strong> — <em>fixed observer</em> (framed picture, e.g. top-to-bottom) or <em>moving observer</em> (details as encountered while moving through a scene); or by the logic of imagination — metaphor/comparison, or arranging around a single dominant impression</li>
          </ol>
        `
      },
      {
        id: "comparison-contrast",
        title: "Rhetorical strategy: Comparison and contrast",
        freq: "high",
        summary: "Strict vs. fanciful comparison, and the two organizational patterns (subject-by-subject vs. point-by-point). This directly powers the recurring \"compare two texts\" question type seen almost every year.",
        exam: "Directly supports the Frost-vs.-Chekhov and Camus-vs.-Plato comparison questions that recur across End-Sem papers.",
        html: `
          <p>To <strong>compare</strong> is to look for similarities; to <strong>contrast</strong> is to look for differences — usually treated as one combined process.</p>

          <h4>Two forms</h4>
          <ul>
            <li><strong>Strict comparison</strong> — compares things in the <em>same</em> class (actor with actor, not actor with musician). Used to present similar information about both, show similar things are actually different (or vice versa), or recommend a choice.</li>
            <li><strong>Fanciful comparison</strong> — an imaginative relationship between <em>dissimilar</em> things, used to introduce a complex idea via something simple (<em>"the human heart works like a pump"</em>). Doesn't recommend choices — it just reveals a striking resemblance.</li>
          </ul>

          <h4>Audience considerations</h4>
          <p>Assess whether both items are known, neither is known, or only one is known — and adjust how much explanation each needs. Readers expect balance: analysis of one part matched with analysis of its counterpart (though not necessarily equal word count).</p>

          <h4>Two organizational patterns</h4>
          <table>
            <tr><th>Pattern</th><th>How it works</th><th>Strength</th><th>Weakness</th></tr>
            <tr><td><strong>Subject-by-subject</strong> (divided)</td><td>All information about subject A, then all about subject B</td><td>Presents each subject as a unified whole; good for short essays</td><td>Can feel like two separate essays if long</td></tr>
            <tr><td><strong>Point-by-point</strong> (alternating)</td><td>For each point of comparison, cover A then B before moving to the next point</td><td>Shows complex connections clearly; good for longer essays</td><td>Can reduce to mechanical list-making if the essay is short/simple</td></tr>
          </table>
          <p>Writers often combine both — divided pattern to establish the first subject, alternating pattern once the second subject is introduced.</p>

          <h4>Three rules for effective comparison</h4>
          <ol>
            <li><strong>Balance parts</strong> — give roughly matched treatment to each side</li>
            <li><strong>Include reminders</strong> — use transitions connecting the two subjects</li>
            <li><strong>Supply reasons</strong> — explain <em>why</em> you're comparing these two things</li>
          </ol>
        `
      },
      {
        id: "division-classification",
        title: "Rhetorical strategy: Division and classification",
        freq: "med",
        summary: "The eighth rhetorical strategy from the syllabus list — classification groups similar items into categories; division breaks one subject into its parts. Often used together.",
        exam: "Completes the syllabus's full eight-strategy list — useful if a question asks you to name or apply all eight rhetorical strategies.",
        html: `
          <p><strong>Classification</strong> and <strong>division</strong> are strategies for organizing and presenting complex information clearly.</p>

          <h4>Classification</h4>
          <p>Groups similar items, ideas, or concepts into categories based on shared characteristics — creates order out of complexity and shows how elements relate.</p>
          <div class="example-box"><div class="ex-label">Example</div>Classifying types of AI into narrow AI, general AI, and superintelligent AI based on their capabilities.</div>

          <h4>Division</h4>
          <p>Takes a single subject and breaks it into its constituent parts, allowing deeper analysis of individual components.</p>
          <div class="example-box"><div class="ex-label">Example</div>Dividing an AI system into machine learning algorithms, data processing, and neural networks.</div>

          <h4>Used together</h4>
          <p>A topic is often first <em>divided</em> into main parts, then each part is <em>classified</em> into subcategories. E.g. education technology divided into hardware and software; hardware then classified into smartboards/tablets/projectors, software into learning management systems/language apps.</p>

          <h4>Where it's used</h4>
          <p>Academic writing (classifying literary genres), persuasive writing (categorizing political ideologies), expository writing (dividing historical events into phases).</p>
        `
      }
    ]
  },

  {
    id: "unit4",
    label: "Unit IV",
    title: "Organizational and Business Communication",
    desc: "Memo, letter, email, résumé, internal proposals, internal reports",
    topics: [
      {
        id: "memo",
        title: "Memo",
        freq: "high",
        summary: "Memos are the classic intra-office writing task — layout (heading, subject line, context, action close), purpose, and writing strategies. One of the highest-yield full question types across every past paper.",
        exam: "Full 5-mark question in the March 2025 archive paper (\"write a MEMO to your head of department requesting materials and asking to postpone the defense\").",
        html: `
          <p>A <strong>memorandum (memo)</strong> is the most traditional everyday workplace correspondence — an intra-office tool, less formal than a letter. The word derives from Latin roots meaning "memorize/remember/remind."</p>

          <h4>Purposes</h4>
          <p>To inform, inquire, report, give suggestions, remind, instruct, promote goodwill, or communicate ideas. Effective memos state their objective in the first sentence.</p>

          <h4>Advantages</h4>
          <p>Clear and concise, formal record for future reference, easy to distribute, designed specifically for internal communication, cost-effective compared to meetings, saves time, standardized/easy to follow, promotes accountability via specified roles/tasks/deadlines.</p>

          <h4>Layout</h4>
          <p><strong>Heading:</strong> To / From / Date / Subject.</p>
          <ul>
            <li><strong>Subject line</strong> — states the main idea in under ten words</li>
            <li><strong>Context</strong> — background information on the issue</li>
            <li><strong>Main message</strong> — organized most-important-point-first; answers what, why, when, how it affects people, and who's affected</li>
            <li><strong>Action close</strong> — a clear call to action: what should be done, by whom, by when; where to go for explanations or to raise concerns</li>
            <li>Signed by the writer</li>
          </ul>

          <h4>Strategies for writing memos</h4>
          <ul>
            <li>Focus on <strong>one topic</strong> only — use a report format if you need more than one</li>
            <li>Be brief — memos should be short and to the point</li>
            <li>Use direct format when the point needs to land fast, indirect format when softening bad news</li>
            <li>Follow the standard format; use white space, headings, bullets</li>
            <li>Distribute only to the people who need it — don't over- or under-send</li>
          </ul>

          <div class="example-box"><div class="ex-label">Sample memo skeleton</div>
          TO: All Employees<br>FROM: [Name, Title]<br>DATE: [Date]<br>SUBJECT: [Ten words or fewer]<br><br>
          Opening line stating the purpose. Key updates in a bulleted list. Closing line on where to direct questions. Sign-off.</div>
        `
      },
      {
        id: "resume",
        title: "CV and résumé",
        freq: "high",
        summary: "Distinguishes résumé, CV, and bio-data — three genuinely different documents that get confused. Includes what to include in each, and the US vs. international usage difference. High-yield since job application/résumé questions appear almost every year.",
        exam: "Full 5-mark question type in the March 2025 archive paper (build a résumé from a candidate profile) and in the End-Sem Aug/Sep 2025 paper (job application letter for Data Analyst).",
        html: `
          <p>Three related but distinct documents: <strong>résumé, CV,</strong> and <strong>bio-data.</strong></p>

          <h4>Résumé</h4>
          <p>A snapshot (1–2 pages) of your most relevant professional experience for a specific job. From the French "résumer" (to summarize). Used when seeking a new job — introduces you to an employer and can determine whether you're invited to interview.</p>
          <p><strong>What to include:</strong> name; current job/title (or desired position); contact information; 1–2 sentence summary of yourself and career goal; work experience; education/graduation date; relevant skills; languages; relevant certifications.</p>

          <h4>CV (Curriculum Vitae)</h4>
          <p>Latin for "course of life." A detailed, elaborate narrative of your work history, achievements, education, skills, languages, and awards. Used internationally for executive, academic, managerial, medical, and senior positions. Functions as a marketing tool.</p>
          <p><strong>What to include:</strong> contact info; research objective/personal statement; education; academic appointments; publications (books, chapters, peer-reviewed); awards and honors; grants/fellowships; conferences; teaching and research experience; non-academic activities; languages/skills; memberships; references.</p>

          <h4>Bio-data</h4>
          <p>Short for "biographical data" — rarely used today, historically found on hospital prescription pads (name, age, sex, disease, medication, vitals). Now mostly seen in government forms or grant applications, emphasizing personal particulars (DOB, religion, nationality, marital status) rather than qualifications.</p>

          <h4>Key difference: CV vs. résumé</h4>
          <table>
            <tr><th>Term</th><th>US usage</th><th>Europe/Ireland/NZ usage</th></tr>
            <tr><td>CV</td><td>Exhaustive academic summary (academia, research, medicine)</td><td>Means the same as "résumé" in the US</td></tr>
            <tr><td>Résumé</td><td>Short, formatted career summary — chronological, functional, or combined</td><td>Less commonly used as a distinct term</td></tr>
          </table>
        `
      },
      {
        id: "proposal",
        title: "Internal (and external) proposals",
        freq: "high",
        summary: "What a proposal is, internal vs. external vs. RFP, the full component list (title page through appendix), and the abstract/introduction/discussion/conclusion breakdown. This is your most exam-frequent topic overall.",
        exam: "Recurs in nearly every past paper: proposal introduction/description sections (March & Sept 2025, archive papers), and underlies concept paper and internal-report questions too.",
        html: `
          <p>A <strong>proposal</strong> is a formal document that persuades readers to accept an idea, service, product, or solution. It explains a problem/need, a suggested solution, and the benefits — the goal is to convince the audience to act.</p>

          <h4>Why write a proposal</h4>
          <p>To sell an idea persuasively, solve organizational problems, or request approval/funding/support. Examples: building a new facility, improving recruitment, expanding services, introducing new technology.</p>

          <h4>Types</h4>
          <ul>
            <li><strong>Internal proposal</strong> — written within an organization, sent to managers/executives (e.g. purchasing new laptops, changing insurance plans, employee training)</li>
            <li><strong>External proposal</strong> — written for clients outside the company, used to sell products/services</li>
            <li><strong>RFP (Request for Proposals)</strong> — a formal request asking companies to submit proposals; used by governments, hospitals, city councils, businesses</li>
          </ul>

          <h4>Common proposal terms</h4>
          <table>
            <tr><th>Term</th><th>Meaning</th></tr>
            <tr><td>Boilerplate</td><td>Reusable standard content</td></tr>
            <tr><td>RFP</td><td>Request for Proposals</td></tr>
            <tr><td>Solicited proposal</td><td>Written in response to a request</td></tr>
            <tr><td>Unsolicited proposal</td><td>Written on your own initiative</td></tr>
            <tr><td>SOW</td><td>Scope/Statement of Work</td></tr>
            <tr><td>T&C</td><td>Terms and Conditions</td></tr>
          </table>

          <h4>Full components of a proposal</h4>
          <p>Title Page → Cover Letter/Email → Table of Contents → List of Illustrations → Abstract → Introduction → Discussion → Conclusion/Recommendation → Glossary → References → Appendix</p>

          <h4>Abstract / Executive Summary</h4>
          <p>A quick overview for busy managers/executives. Includes the problem, suggested solution, benefits, and features. Short, low-technical language, usually 3–10 sentences.</p>

          <h4>Introduction — two main parts</h4>
          <ol>
            <li><strong>Purpose statement</strong> — clarifies the proposal's objective. <em>"The purpose of this report is to propose the installation of X."</em></li>
            <li><strong>Problem/needs analysis</strong> — why the proposal is necessary, what problems the organization faces (e.g. security risks, declining productivity)</li>
          </ol>

          <h4>Discussion</h4>
          <p>Must communicate persuasively and ethically — research from primary and secondary sources, and the proposal must be <strong>accurate, honest, fair, and properly documented</strong> (avoiding false claims, misleading pricing, plagiarism). Common organizing methods: comparison/contrast, cause and effect, chronological order, analysis.</p>
          <p><strong>Graphics:</strong> tables for costs/comparisons; line charts for trends; bar charts for comparisons; pie charts for percentages; flowcharts for procedures; org charts for hierarchy.</p>

          <h4>Conclusion and recommendations</h4>
          <p>Summarizes the problem, solution, and benefits; suggests the next action and includes an implementation timeline.</p>
        `
      },
      {
        id: "report",
        title: "Report writing",
        freq: "high",
        summary: "The fullest, most exam-relevant reference on report structure — title page through appendices, the writing stages, the 4 P's outline model, and a complete presentation/style checklist. Combine with the Internal Proposal page since both share an outline logic.",
        exam: "Report outline questions recur every year (\"prepare a topic outline of a Long Report and explain each component\"), and the appendices-vs-abstract distinction is a frequent MCQ trap.",
        html: `
          <p>A <strong>report</strong> is a more highly structured form of writing than an essay — designed to be read quickly and accurately, not necessarily start to finish. It's a self-explanatory statement of facts on a subject, serving decision-making and follow-up action.</p>
          <div class="example-box"><div class="ex-label">Classic definitions</div>
          G.R. Terry: "A formal presentation of summary information dealing with the utilization of resources or status of operations, useful in evaluating progress, making decisions, and directing activities."<br><br>
          C.A. Brown: "A communication from someone who has some information to someone who wants to use that information."</div>

          <h4>Stages in report writing</h4>
          <ol>
            <li>Planning your work</li>
            <li>Collecting your information</li>
            <li>Organizing and structuring information</li>
            <li>Writing the first draft</li>
            <li>Checking and re-drafting</li>
          </ol>
          <p>A common structural model is the <strong>4 P's</strong>: Position (current state) → Problem → Possibilities → Proposal.</p>

          <h4>Full structure of a report</h4>
          <table>
            <tr><th>Section</th><th>What it contains</th></tr>
            <tr><td>Title page</td><td>Title, author(s), module/course, date</td></tr>
            <tr><td>Acknowledgements</td><td>Credit to anyone who helped gather information</td></tr>
            <tr><td>Contents</td><td>All main sections in sequence with page numbers; separate "List of Illustrations" for charts/diagrams/tables</td></tr>
            <tr><td><strong>Abstract / Executive Summary</strong></td><td>Short paragraph: main task, methods used, conclusions, recommendations. Written <em>after</em> the main body. Useful for busy readers who won't read the whole thing.</td></tr>
            <tr><td>Introduction</td><td>Context, scope, terms of reference (what you were asked to find out), objectives, limits, method outline, background</td></tr>
            <tr><td>Methodology</td><td>How the enquiry was carried out — interviews, questionnaires, data collection, measurements</td></tr>
            <tr><td>Results / Findings</td><td>Presented as simply as possible; graphs/charts break up dense text</td></tr>
            <tr><td>Discussion</td><td>Analysis and interpretation of results; significance; problems encountered; a balanced view</td></tr>
            <tr><td>Conclusions and recommendations</td><td>Draws together main issues — <strong>should not introduce new information</strong></td></tr>
            <tr><td>References</td><td>Precise, accurate citation of all sources used</td></tr>
            <tr><td><strong>Appendices</strong></td><td>Additional supporting material not essential to the main argument — interview questions, statistical data, glossary. The report's interpretation should not depend on the reader consulting this.</td></tr>
          </table>

          <h4>Presentation and style</h4>
          <ul>
            <li>Short, concise, spaced-out paragraphs</li>
            <li>Avoid rambling — short sentences</li>
            <li>Avoid jargon and unexplained abbreviations; use a glossary if needed</li>
            <li>Clear headings (bold or underlined)</li>
            <li>Label graphs/pictures as "Figures," tables as "Tables" (numbered)</li>
            <li><strong>Active voice</strong> ("I recommend...") reads punchy and direct; <strong>passive voice</strong> ("It is recommended that...") is more formal, common in academic writing — don't mix the two</li>
            <li>Progressive numbering: main sections (1, 2, 3), subsections (1.1, 1.2), further division (1.1.1, 1.1.2)</li>
          </ul>

          <h4>Report writing checklist (quick self-check)</h4>
          <p>Title page complete? Acknowledgements given? Contents lists all sections + illustrations? Abstract states task/methods/conclusions/recommendations? Introduction gives terms of reference, limits, method outline, background? Methodology explains data collection? Findings clearly labeled and linked to text? Discussion identifies key issues with a balanced view? Conclusions avoid new information? References accurate and complete? Appendices contain only supporting (non-essential) material?</p>
        `
      }
    ]
  }
];
