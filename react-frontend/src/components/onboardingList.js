import React from 'react';

class OnboardingList extends React.Component{
    constructor(props){
        super(props);
    }
    render() {return <form>
        <ul>
        <li>
                <label className = "onboarding-lbl">1. In zoveel mogelijk detail, beschrijf jouw ideale klant (de ideale leeftijd, geslacht, interesses, hobby's, inkomensniveau, locatie).</label>
                <textarea type = "text" placeholder = "input text" className = "onboarding-inp" maxlenght = "60" rows = "10" spellcheck = "true" name = "1"></textarea>
            </li>

        <li>
         <label className = "onboarding-lbl">2. Zijn er bepaalde sectoren waarin jullie ideale klant vaak te vinden is? Waarom past jullie aanbod goed bij hun behoeften?</label>
                <textarea type = "text" placeholder = "input text" className = "onboarding-inp" maxlenght = "60" rows = "4" spellcheck = "true" name = "2"></textarea>
            </li>
            <li>
                <label className = "onboarding-lbl">3. In zoveel mogelijk detail, beschrijf jouw ideale klant (de ideale leeftijd, geslacht, interesses, hobby's, inkomensniveau, locatie).</label>
                <textarea type = "text" placeholder = "input text" className = "onboarding-inp" maxlenght = "60" rows = "4" spellcheck = "true" name = "3"></textarea>
            </li> 
            <li>
                <label className = "onboarding-lbl">4. Waarom maken uw klanten gebruik van uw dienst? Welk probleem lost het voor hen op</label>
                <textarea type = "text" placeholder = "input text" className = "onboarding-inp" maxlenght = "60" rows = "4" spellcheck = "true" name = "4"></textarea>
            </li> 
            <li>
                <label className = "onboarding-lbl">5. Geef alsjeblieft een lijst van enkele van jouw meest significante concurrenten.</label>
                <textarea type = "text" placeholder = "input text" className = "onboarding-inp" maxlenght = "60" rows = "4" spellcheck = "true" name = "5"></textarea>
            </li> 
            <li>
                <label className = "onboarding-lbl">6. Waarom kiezen klanten voor uw bedrijf in plaats van voor uw concurrenten?</label>
                <textarea type = "text" placeholder = "input text" className = "onboarding-inp" maxlenght = "60" rows = "4" spellcheck = "true" name = "6"></textarea>
            </li> 
            <input type = "submit" className = "onboarding-btn" value = "Send"/>

        </ul>
    </form>
    };

}

export default OnboardingList;