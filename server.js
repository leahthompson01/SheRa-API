const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;


app.use(cors())
//app.get(endpoint, (req,res)=> {})
//first thing I want to do to make sure my code is working is serve up a file
//going to make a shera and the princesses of power API
const princesses = {
        'adora': {
            nicknames: `She-Ra
            Princess of Power,
            Princess Adora,
            Blondie,
            Dummy`,
            image: 'https://static.wikia.nocookie.net/shera-and-the-princesses-of-power/images/a/a4/AdoraRender.png/revision/latest?cb=20181030172527',
            powers: ['transformation', 'superhuman strength', 'superhuman agility', 'sword transformation','healing powers',
        'animal transformation','energy blast', 'aura generation','animal magic','sword summoning','space survival' ],
            personality: `Adora is a brave, competitive, and noble warrior and is true to her own values. She's very strong as it's seen in an arm-wrestling match where she beats the well built and strong-arm wrestler, Sea Hawk. She is shown to be a leader in every group she joins.`
      
        },
        'glimmer' : {

            nicknames: `Sparkles, Princess
            Glitter, 
            Sparkle Bomb,
            Darling,
            The Glittery One that Yells`,
            image: 'https://static.wikia.nocookie.net/shera-and-the-princesses-of-power/images/6/66/QueenGlimmer.png/revision/latest/scale-to-width-down/237?cb=20200619025700',
            powers: ['moonstone connection','teleportation','photokinesis','aura generation','sorcery'],
            personality: `Glimmer is shown to be short-tempered and often quite stubborn. She is also somewhat of a rebel, as she often disobeyed her mother, Angella. Even when grounded, she tended to act against her mother's wishes in secret. 
            Her rebellious personality manifests itself in the form of impulsiveness, as she frequently acts without thinking.`


        },
        'entrapta' : {
            nicknames: `Geek Princess,
            Little Rebel`,
            image: 'https://static.wikia.nocookie.net/shera-and-the-princesses-of-power/images/7/77/EntraptaRenderHQ.png/revision/latest/scale-to-width-down/350?cb=20200525115621',
            powers: ['trichokinesis'],
            personality: `Entrapta is incredibly hyperactive, cheerful, intelligent, bubbly, and optimistic. She's kind to everyone she meets, never threatening or harming anyone directly, including robots. She has a very positive outlook on life (even in moments of grave danger), and doesn't seem to mind what's going on around her as long as she can perform her experiments and research.`,


        },
        'angella' : {
            nicknames : `Angie,
            Mom,
            Ma'am,
            Sir,
            Your Majesty,
            The Queen of the Princesses`,
            image: 'https://static.wikia.nocookie.net/shera-and-the-princesses-of-power/images/7/78/AngellaRenderHQ.png/revision/latest/scale-to-width-down/288?cb=20200525124532',
            powers: ['moonstone connection','photokinesis','flight','immortality'] ,
            personality: `As the leader of the Rebellion, Angella was very austere and focused. Often, due to her high responsibility, she appears somewhat standoffish and detached, conservative in her decisions.
             However, she was extremely protective and devoted to her daughter, Glimmer, who both support each other after Micah's presumed death. She can be lofty and precise, because she likes for things to be neat and organized.`

        },
        'perfuma' : {
            nicknames: `Flower Girl,
            Tara,
            The Flower One `,
            image: 'https://static.wikia.nocookie.net/shera-and-the-princesses-of-power/images/2/2d/PerfumaFlowerHQ.png/revision/latest/scale-to-width-down/350?cb=20200525124243',
            powers: ['heart-blossom connection', 'chlorokinesis','aura generation'],
            personality: `Possessed of a strong core, Perfuma is a peace-loving person who believes that the universe will reward those who do good and punish those who are evil. Despite being strongly against violence, she is more than willing to fight for what is right even if it means risking her life.`,
        },
        'mermista' : {
            nicknames: `Sea-Ra,
            Water Princess `,
            image: 'https://static.wikia.nocookie.net/shera-and-the-princesses-of-power/images/a/a6/MermistaRenderHQ.png/revision/latest/scale-to-width-down/260?cb=20200525120910',
            powers: ['Hydrokinesis',' Aquatic Respiration', 'Mermaid Transformation'],
            personality: `Sarcastic and blunt, Mermista keeps a stony face and a cool head most of the time, usually finding it hard to express her true feelings and masking them behind a relaxed exterior. She is stoic and has no problem speaking her mind, but often shies away from verbally expressing her feelings, particularly the ones she holds towards Sea Hawk.`,
        },
        'frosta' : {
            nicknames: `Frostbite Winter's Bane,
            Little Buddy,
            The Small Cold Girl`,
            image: 'https://static.wikia.nocookie.net/shera-and-the-princesses-of-power/images/6/64/FrostaRenderHQ.png/revision/latest/scale-to-width-down/350?cb=20200525120324',
            powers: ['Cryokinesis Ice', 'frost', 'snow powers',
                'Creating structures made of ice'],
            personality: `After joining the rebellion she was shown to a more childish, humorous, if not socially, inept side, using puns like "Ice of you to drop in" and laughing wildly at her own jokes; she has also seen as being very overzealous, hotheaded and reckless, charging into fights without thinking of the consequences to herself and to the rebellion. She constantly puts herself and others at risk, trying to prove her strength and prowess among the older, more accomplished princesses, in particular Glimmer, in an effort to win their friendship. As a princess, she's also shown to have a deep care for people, both of her kingdom and in general.`,
        },
        'scorpia' : {
            nicknames: `Big Gal,
            A Big Bug,
            Lynda D'Ream`,
            image: 'https://static.wikia.nocookie.net/shera-and-the-princesses-of-power/images/d/df/ScorpiaRenderHQ.png/revision/latest/scale-to-width-down/350?cb=20200525121249',
            powers: ['Super-strength',
                'Paralyzing poison',
                'Strong pincers',
                'Electrokinesis',
                'Aura generation'],
            personality: `Scorpia, although from the Horde, is a very caring and steadfast friend, in addition to being a determined Force Captain, barely showing a hint of true malice or sadism compared to the others. When in battle, her incompetence and her innocent nature can hinder her progress, but she makes up for it with her dedication to the Horde. She is not very serious or competent but does get the job done. However, Scorpia is naive and often makes petty mistakes.`,
        },
        'spinerella' : {
            nicknames: `Spinny,
            Dear Sister`,
            image: 'https://static.wikia.nocookie.net/shera-and-the-princesses-of-power/images/0/01/SpinnerellaHQ.png/revision/latest/scale-to-width-down/334?cb=20200525124436',
            powers: ['Aerokinesis','aura generation'],
            personality: `Spinnerella has a sweet, comforting, and empathetic personality that she showcases in the Season One finale when she comforts her wife. In Season Four, she also appears to be quite competitive in a playful way, trying to earn more enemy take-downs than Netossa. The pair have some playful banter when fighting Horde bots.`,
        },
        'netossa' : {
            nicknames: `Beloved,
            Darling`,
            image: 'https://static.wikia.nocookie.net/shera-and-the-princesses-of-power/images/a/a1/NetossaRenderHQ.png/revision/latest?cb=20200525123929',
            powers: ['ergokinesis','aura generation'],
            personality: `Netossa came off rather annoyed with Bow when he made it obvious he did not know what she did, despite the fact that her ability is stated in her name. However, up to that point she had not done much, or been very vocal. The interaction shows that she is proud of what she does and wants to be recognized for it. Netossa is jokingly but determinedly competitive and keeps score with Spinnerella on how many Horde bots they can take down. In contrast, she is also gentle and affectionate, as is obvious whenever she and Spinnerella are together. She deeply cares about her wife, and will do anything to ensure her safety.`,
        }
    }
app.get('/', (req,res)=> {
    res.sendFile(__dirname + '/index.html')
})
app.listen(PORT, () =>{
    console.log(`Server is now running on Port ${PORT}`)
})
app.get('/api/:charactername', (req,res)=> {
    const charactersname = req.params.charactername.toLowerCase()
    if(princesses[charactersname]){
        res.json(princesses[charactersname])
    }else {
        res.json({error : "not a character"})
    }
})