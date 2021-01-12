import React, { Component } from 'react';
import "./calendar.css"

class Self extends Component {
    render() {
        return (
            <div>

                <h2 className="calendarMainHeader">THE PRIME CALENDAR</h2>
               
               <div className="container" style={{border: "1px solid black", padding: "0"}}>

               <h4 className="selfHeading3">Need to know where you are, to know where you are going...</h4>

                <div className="table-responsive">
                <h4 className="selfHeading">PRIME YEAR:<br/><br/><h5> Personal Year </h5></h4>

                    <table className="table table-striped table-bordered">
                {/* (Month of Birth + Day of Birth + Current Year) */}
                        <tbody>
                            
                                <tr>
                                <h5 className="calendarMainHeading">PRIME YEAR 1: INITIATION</h5>
                                
                                <h6 className="calendarTextHeading"> -  Year of major changes  -  Need to make some decisions  
                -  Work to embrace the opportunities coming rather than resisting change  
                -  A good time to focus on Prime growth and making positive 
                -  Avoid procrastination this year as it will have more detrimental effects that usual
                -  Determination truly pays long term for efforts made during this cycle
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME YEAR 2: CONNECTION</h5>
                                
                                <h6 className="calendarTextHeading">- Time to maintain friendly and harmonious relationships with others  
                -  Your relationship with others will improve  -  Great possibility to make new friends 
                -  Be careful and solve the difficulties coming in your way in a tactful manner
                -  Some long awaited success might come in this period  
                -  Resolve conflicts in a cooperative manner  -  Unexpected results  
                -  You will have peace and harmony in this month
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME YEAR 3: EXPRESSION</h5>
                                
                                <h6 className="calendarTextHeading">- Expansion  -  Consistent embracement of success  - Embrace partnerships  
                - Being cooperative with others for common goals and the benefit of the whole
                -  More breathing room  -  Feeling of a burden being lifted off shoulders
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME YEAR 4: SUPERVISION</h5>
                                
                                <h6 className="calendarTextHeading">-  Being responsible  -  Hard work  -  Diligent efforts will be required  
                -  "Hands on" effort and making every effort count  
                -  This is a year of building solid foundations  
                -  You may feel you are not accomplishing as much as you actually are 
                -  Completing ground work and solidifying
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME YEAR 5: EXPLORATION</h5>
                                
                                <h6 className="calendarTextHeading">- Strong desire for change and adventure  -  Trying new things  
                -  More inclined to travel move or change career paths  
                -  Brings out the pioneering spirit and the desire for new experience and expression
                -  Easy to become distracted and self-discipline is more difficult
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME YEAR 6: DOMESTICATION</h5>
                                
                                <h6 className="calendarTextHeading">-  Focus more on personal relationships  -  Meeting new people  
                -  Deepening or finding love with a special someone  
                -  Forming or strengthening lasting bonds with others  
                -  You may find you make new friends or mend fences at this time  
                -  May be called to face yourself with more honesty
                -  Work on cultivating more love/respect within
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME YEAR 7: INTUITION</h5>
                                
                                <h6 className="calendarTextHeading">-  Period of introspection and more solitude  
                -  A time for focusing on personal goals, growth, and expansion  
                -  Withdrawing a bit socially to focus on personal issues  
                -  A great time for pursuing growth through education  
                -  Enlightenment
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME YEAR 8: EMPOWERMENT</h5>
                                
                                <h6 className="calendarTextHeading">-  Focus on investments, monetary issues, and growth on a more material/career level
                -  Great time to focus on increasing business or even starting a new business  
                -  Personal financial growth, getting promotions, and building upon further success 
                -  A cycle of prosperity
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME YEAR 9: VISIONARY</h5>
                                
                                <h6 className="selfTextHeading">-  Focus on Change  -  Feelings of restlessness and anticipation  
                -  Strong desire to make changes  
                -  Clear away areas that are no longer serving your growth  
                -  Remove limitations from your life  -  Prepare to start fresh
                </h6>    </tr>
        
                        </tbody>
                    </table>
                </div> 
                
                <div className="table-responsive">
                <h4 className="calendarHeading">PRIME MONTH:<br/><br/><h5> Personal Month</h5></h4>

                    <table className="table table-striped table-bordered">
                        {/* (Personal Year + the current month) */}
                        <tbody>
                            
                                <tr>
                                <h5 className="calendarMainHeading">PRIME MONTH 1: INITIATIVE</h5>
                                 
                                <h6 className="calendarTextHeading">-  Start New Ventures  
                -  Careful decisions should be taken at this time to get the best results in future 
                -  New and innovative ideas for the future  
                -  This is a period to give vent to your creative side  -  Maintain your originality
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME MONTH 2: CONNECTIVE</h5>
                                

                                <h6 className="calendarTextHeading">-  Time to maintain friendly and harmonious relationships  
                -  Relationship with others will improve this month and you will make new friends  
                -  Be careful and solve the difficulties coming in your way in a tactful manner
                -  Unexpected results  -  Some long awaited success is possible  
                -  You should resolve conflicts in a cooperative manner  
                -  You will have peace and harmony in this month
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME MONTH 3: EXPRESSIVE</h5>
                                
                                <h6 className="calendarTextHeading">-  Explore your creative side  -  Very Social  -   Share your joys and pleasures with others
                -  More innovative and do things in new ways  -  You should be more optimistic  
                -  Have a free mind  -   Good time to explore your artistic side  
                -  This is the time to be highly involved with family, friends and relatives
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME MONTH 4: SUPERVISOR</h5>
                                
                                <h6 className="calendarTextHeading">-  Plan and organize your work carefully   
                -  Chances of some legal, financial and property related hassles
                -  Need for more focus  -  Extra careful about any legal or money related matters
                -  You should be organized on your job front and work in a patient, methodical manner
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME MONTH 5: EXPLORER</h5>
                                
                                <h6 className="calendarTextHeading">-  Forget about past mistakes and start fresh  -  Full of new and innovative ideas 
                -  Do things in a different and more effective way  
                -  Learning and sharing your knowledge with others  
                -  Look at life with a fresh mind  -  Avoid taking on too many tasks
                -  Need to work hard on your present situations 
                </h6>   </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME MONTH 6: DOMESTICATE</h5>
                                
                                <h6 className="calendarTextHeading">-  Give importance to your personal life  -  Family life becomes a priority  
                -  Yearn for a happy and harmonious family life   
                -  Handle your personal relationship and health issues in a careful way  
                -  Need to practice the spirit of willingness  -  Need to think about your family and your home 
                -  Take care of your family and health issues
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME MONTH 7: INTUITIVE</h5>
                                
                                <h6 className="calendarTextHeading">-  Need to explore your inner talents and ideas  
                -  Use inner talents to get the best success results  -  Listen to your inner soul
                -  Pay close attention to your plans and ideas  -  Others will misunderstand you 
                -  Need to maintain peace and harmony with others at any cost
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME MONTH 8: EMPOWERED</h5>
                                
                                <h6 className="calendarTextHeading">-  Have to work really hard to make things happen  -  Great testing time for you  
                -  Remain calm and composed to make things happen  
                -  Requires effort to reach success  -  Make a conscious effort in being patient  
                -  Rewarded with material success  -   Repeated efforts needed to achieve success
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME MONTH 9: ENVISION</h5>
                                
                                <h6 className="calendarTextHeading">-  Do something for the society  -  Personal goals and desires should take a backseat 
                -  Be more thoughtful about the welfare of others  
                -  Involve yourself in different social activities  -  Difficulty changing anything by force
                -  You will have to tackle issues as you face them  
                -  Time to have a broad outlook of things
                -  Put your personal goals, achievements and needs to a side
                </h6>    </tr>
                                
                        </tbody>
                    </table>
                </div> 

                <div className="table-responsive">
                <h4 className="calendarHeading">PRIME DAY:<br/><br/><h5> Personal Day </h5></h4>

                    <table className="table table-striped table-bordered">
                {/* (Month of Birth + Day of Birth + Current Date) */}
                        <tbody>
                            
                                <tr>
                                <h5 className="calendarMainHeading">PRIME DAY 1: TO INITIATE</h5>
                                
                                <h6 className="calendarTextHeading">-  Primary concern is about yourself  -  Focus on personal goals and desires  
                -  You have some innovative and original ideas that need to be acted upon 
                -  This is also a time when you are vulnerable to the negative influences of others  
                -  You should be confident on your own abilities  
                -  Work on your own to achieve success  -  Analyze your dreams, wants, and desires
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME DAY 2: TO CONNECT</h5>
                                
                                <h6 className="calendarTextHeading">-  Day to be social and develop friendly relationship with others 
                -  Like to be in the company of friends  -  Try to resolve differences with others
                -  Don’t like to dominate and be dominated in any case
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME DAY 3: TO EXPRESS</h5>
                                
                                <h6 className="calendarTextHeading">-  Increased get fun from some lively recreational activities on this day  
                -  Enjoy the small joys  -  Make the best of it  -  Don’t be overly worried  
                -  Perfect day for some fun and enjoyment  -  Need to be busy
                -  Engage in recreational activities  -  Very communicative  
                -  You will have to be careful about your conversation with others
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME DAY 4: TO SUPERVISE</h5>
                                
                                <h6 className="calendarTextHeading">-  Day of maximum hard work  -  Great day to engage in and settle business affairs  
                -  Cherish the rewards generated by your hard work 
                -  Make the best effort   -  Be proud of everything you do today
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME DAY 5: TO EXPLORE</h5>
                                
                                <h6 className="calendarTextHeading">-  Would love to travel to distant places for relaxation  
                -  Day to make good and valuable friendships  
                -  Desire to move ahead in life with new energy and vigor  
                -  Will face changes, Renovation, Engage in tours on this day
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME DAY 6: TO BE DOMESTIC</h5>
                                
                                <h6 className="calendarTextHeading">-  Day to maintain balance and harmony in life  
                -  Spend some quality time with your friends and family
                -  Priority on familial and domestic matters  -  Brings balance to our lives
                -  Need to seek out and create harmony every possible way  
                -  Look for the happiness of your family and friends 
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME DAY 7: TO BE INTUITIVE</h5>
                                
                                <h6 className="calendarTextHeading">-  Tendency to lose your calm and feel disturbed  -   Try to avoid conflicts 
                -  Maintain a calm and composed demeanor  -  Very Intuitive  
                -  Focus on your inner thoughts and ideas
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME DAY 8: TO EMPOWER</h5>
                                
                                <h6 className="calendarTextHeading"> -  Focus on important professional decisions  
                -  Good day for business and financial decisions  -  Day of increased success  
                -  Able to make quick decisions  -  Full of positive energies on this day
                </h6>    </tr>
                                <tr>
                                <h5 className="calendarMainHeading">PRIME DAY 9: TO VISUALIZE</h5>
                                
                                <h6 className="calendarTextHeading"> -  Day to cherish the companionship of others  -  Day of caring and sharing
                -  You get great joy in sharing your achievements with others  
                -  Easy to speak ad share with others  -  Spend time with your near ones
                </h6>    </tr>
                                
                        </tbody>
                    </table>
                </div> 
                
    
                
                {/* PRIME LESSON
                Prime Lesson (Use entire name, but adding the CONSONANTS only)

                1-  THE DEPENDENT
                LESSON
                - Learning to be more independent and able to stand on your own
                - Tendency to become too dependent on others
                IN ORDER TO DEVELOP YOU MUST OVERCOME…
                THE DEPENDENT SIDE
                - May appear very dependent rather than independent
                - Likely to be very dissatisfied with your circumstances
                -Long for self-sufficiency
                - Too Self- Serving
                - Selfishness 
                -Egotistical 
                -Over-Confidence 
                -Impatience 	
                2- THE PASSIVIST
                LESSON 
                - Learning to trust your instincts and intuitions
                - Struggle with choices, Learn to develop confidence in your decision making
                IN ORDER TO DEVELOP YOU MUST OVERCOME…
                THE PASSIVE SIDE
                -Very Passive
                -Apathy
                -Lethargy 
                -Very Pessimistic 
                -Accomplishes very little
                - Overly Friendly 
                - Less Competitive environment	
                3- THE SUPERFICIAL
                LESSON 

                - Must learn balance between work and play

                - Must Learn organization

                - Learn to manage  time and resources effectively 

                IN ORDER TO DEVELOP YOU MUST OVERCOME…
                THE SUPERFICIAL SIDE
                -Frivolous
                -Superficial
                -Scattered Abilities
                -Little Sense of Purpose
                -Can become an Enigma
                -Moody
                -Isolated
                -Hard to Settle Down
                -Very Critical of others
                -Impatient
                -Intolerant
                -Overly Optimistic
                 

                4- THE IMPLODER
                LESSON 

                -Need to work harder than others to be successful

                -Pushing oneself to new limits through effort and perseverance despite obstacles.

                IN ORDER TO DEVELOP YOU MUST OVERCOME…
                THE IMPLODER SIDE
                -Very Dogmatic
                - Narrow-minded
                - Repressive
                - Tendency to get too caught up in the daily routine of affairs 
                -Often misses the big picture and major opportunities that come along once in a while


                    
                5- THE NARCISSIST
                LESSON

                - Tendency towards overindulgence and addiction

                - Need to learn the true meaning of moderation

                - Avoid being excessive due to loss of situation control


                IN ORDER TO DEVELOP YOU MUST OVERCOME…
                THE NARCISSIST SIDE
                - Very irresponsible in tasks and decisions concerning your home and business life
                - Too Self-indulgent 
                - Totally unaware of the feelings of those around you
                - Very undependable
                - Self-serving

                    
                6- THE CAPRICIOUS
                LESSON
                - Learn responsibility and loyalty to family and related duties
                - Often face challenges with certain family members
                - Struggle with meeting familial obligations.
                IN ORDER TO DEVELOP YOU MUST OVERCOME…
                THE CAPRICIOUS SIDE
                - Tendency to become overwhelmed by responsibilities and a slave to others
                - Very critical (of yourself or of others).
                - Exaggeration 
                - Over-expansiveness
                - Self-righteousness
                - Imposing one's views 
                - Bouts of Irresponsibility lead to bad relationships with others


                 


                7- THE COMPLAINER
                LESSON
                - Learn to develop more spiritually 
                -Learn to be in environments where you feel ready and able to seek your own truth without being swayed by the judgments of others.
                IN ORDER TO DEVELOP YOU MUST OVERCOME…
                THE COMPLAINER SIDE
                - Pessimistic
                - Lackadaisical
                - Quarrelsome
                - Secretive
                - Hard person to live with because of a serious lack of consideration 
                - Very Selfish and Spoiled
                - Tend to feel that the world really does owe you a living
                - Feeling that the world is being unfair
                -  Emotional Instability 
                - Mood Swings
                    
                8- THE IMPATIENT
                LESSON

                - Learn to work really hard to make things happen

                - Learn to be calm and remain composed to make things happen

                - Efforts are required to be successful

                - Patience can lead to material success

                - Repeated effort required to achieve success

                IN ORDER TO DEVELOP YOU MUST OVERCOME…
                THE IMPATIENT SIDE
                - Dictatorial
                - Suppresses the enthusiasm and efforts of others
                - Lack close relationships
                - Material gains and rewards become priority over home and family
                - Obsessed with success, which leads to loneliness 
                    
                9- THE DEMANDER
                LESSON 
                - Learning to be more selfless and put others needs ahead of your own desires
                -  Learn to be the Humanitarian who is called in life to help the suffering and struggling
                - Learn to develop empathy for others, normally through difficult experiences of their own in life.
                IN ORDER TO DEVELOP YOU MUST OVERCOME…
                THE DEMANDER SIDE
                -  Selfishness
                - Fight the realities and challenges of purpose 
                - Difficulty believing that giving and a lack of personal ambition can be satisfying
                - It must be realized and accepted that little long-term satisfaction and happiness is to be gained by rejecting natural humanitarian inclinations  */}



                </div>     
            </div>
            
        )
    }
}

export default Self;