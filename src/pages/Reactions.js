import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import {
    acetal1, addbenring1, addbenring2, addbenring3, addbenring4, addbenring5, 
    addbenring6, addhalo1, addhalo2, addhalo3, addhalo4, addhalo5, addhalo6,
    addhalo7, addhalo8, addhalo9, addhalo10, alcohol1, alcohol2, alcohol3, 
    alcohol4, alcohol5, alcohol6, alcohol7, alcohol8, alcohol9, alcohol10,
    alcohol11, alcohol12, aldehyde1, aldehyde2, aldehyde3, aldehyde4, 
    alkane1, alkane2, alkene1, alkene2, alkene3, alkene4, alkyne1, amide1, 
    carboxy1, carboxy2, ccbond1, ccbond2, ccbond3, ccbond4, ccbond5, ccbond6, 
    ccbond7, deoxy1, epoxide1, epoxide2, epoxide3, ether1, ether2, ether3, 
    ester1, imine1, ketone1, ketone2, ketone3, ketone4, ketone5, ring1, 
    taut1, taut2
  } from '../images';

function Reactions() {
    const [GoToReactions, setGoToReactions] = useState(false);
    const location = useLocation();
    console.log(location);

    const image = () => {
        switch (location.state.toLowerCase()) {
            case 'acetal':
                return(
                    <div>
                        <p><b>Acetal Formation</b></p>
                        <p><i>Addition of Alcohol to Aldehydes and Ketones</i></p>
                        <img src={acetal1} />
                        <p>Add an alcohol with acid to a ketone to form the acetal. Note that the hemiacetal is an intermediary step but will naturally turn to an acetal in acidic conditions <span>&#40;</span>which is why we have H₂SO₄<span>&#41;</span>.</p>
                    </div>
                )
            case 'addition of halogen':
                return(
                    <div>
                        <p><b>Addition of Two Halogens</b></p>
                        <p><i>Requires alkene</i></p>
                        <img src={addhalo1} />
                        <p>When a halogen, such as bromine, is in a slightly polar protic solvent it first reacts to form an epoxide. The pi electrons from the alkene grab the bromine, creating a bromine ion as a byproduct. This ion acts as a nucleophile, attacking the ring to release the steric hindrance. While there is no regioselectivity because both groups being added are the same, it is a nucleophilic backside attack on a tetrahedral carbon. This inverts the stereochemistry resulting in an anti addition.</p>
                        <p><b>Addition of Halohydrin</b></p>
                        <p><i>Requires alkene in protonating conditions</i></p>
                        <img src={addhalo2} />
                        <p>The pi electrons from the alkene grab the bromine. Water then acts as the nucleophile, attacking the epoxide ring to relieve the steric hindrance. The nucleophile back attacks the more substituted carbon. This results in an inversion of stereochem and an anti addition of the alcohol and halide groups.</p>
                        <p><b>Dihalide Addition</b></p>
                        <img src={addhalo3} />
                        <p>The pi bond attacks the proton in H-Br, which gets added in a Markovnikov fashion. Then Br<sup>-</sup> attacks the carbon cation, which leads to the formation of the alkene. This happens again with the alkene, causing H-Br to be added twice in a Markovnikov fashion. There are no more chiral centers at the end due to bromine and hydrogen being added twice to the same side.</p>
                        <p><b>Hydrogen Halide Addition</b></p>
                        <img src={addhalo4} />
                        <p>When in the presence of a strong acid, think protonation. The pi electrons from the alkene attack the electrophilic HBr, creating a carbocation intermediate. Because the more stable carbocation is favored, this reaction follows Markovnikov<span>&#39;</span>s rule. Additionally, because the carbon is planar, the Bromine ion can attack from either the front or back creating a mixture of stereochem.</p>
                        <p><b>Alcohol Reactions</b></p>
                        <p><i>Using Inorganic Acids</i></p>
                        <img src={addhalo5} />
                        <p>Because this mechanism is Sn1 or Sn2, using inorganic acids is preferential to primary or secondary alcohols. Potential reagents include PBr₃, PI₃, PCl₃, and SOCl₂.</p>
                        <p><b>Alcohol Reactions</b></p>
                        <p><i>Using Organic Compounds and Acids</i></p>
                        <img src={addhalo8} />
                        <img src={addhalo9} />
                        <p>Starting with alcohol in an acidic environment, protonation of the OH group occurs, turning it into a good leaving group. A Sn1 mechanism follows.</p>
                        <p><b>Alpha-Halogenation</b></p>
                        <p><i>Enols and Enolates</i></p>
                        <img src={addhalo6} />
                        <p>Use acetic acid and Br₂ to form a Br at the alpha position to the carbonyl. Note that we are using an acid here instead of a strong base because the product is more acidic than the reactant <span>&#40;</span>Br is an electron-withdrawing group, which means when there is a negative charge Br will inductively help to hold the negative charge if there is deprotonation<span>&#41;</span>. That is why you have the reaction in acid, which means the reactant will now act as a base. </p>
                        <p><b>EAS Halogenation</b></p>
                        <p><i>Adding to a Benzene Ring</i></p>
                        <img src={addhalo7} />
                        <p>One Br₂ with a catalyst like AlX₃ or FeX₃. Reminder that Br₂ itself is not strong enough to disrupt an aromatic ring. You need a catalyst! </p>
                        <p><b>Making Acyl Chloride</b></p>
                        <p><i>Alcohol to Cl</i></p>
                        <img src={addhalo10} />
                        <p>Add SOCl₂ to a carboxylic acid to replace an alcohol with Cl.</p>
                    </div>
                )
            case 'addition to benzene ring':
                return(
                    <div>
                        <p><b>Adding Nitrite</b></p>
                        <p><i>EAS</i></p>
                        <img src={addbenring1} />
                        <p>When adding HNO₃ with an aromatic ring, H₂SO<sub>4</sub> is necessary because HNO3 by itself cannot disrupt the aromatic ring. Note that NO₂ has a negative and positive charge.</p>
                        <p><b>Sulfonation</b></p>
                        <p><i>EAS</i></p>
                        <img src={addbenring2} />
                        <p>One SO₃ in H₂SO<sub>4</sub> <span>&#40;</span>or just SO₃<span>&#41;</span>. SO₃ can actually disrupt the aromatic ring by itself and H₂SO<sub>4</sub> is not needed. That being said, adding H₂SO<sub>4</sub> will make the reaction more efficient! </p>
                        <p><b>Making Carboxylic Acids</b></p>
                        <p><i>Organometallic Reagents</i></p>
                        <img src={addbenring3} />
                        <p> Remember to number your steps for this one! Also, H₃O<sup>+</sup> is used because once you add CO₂, you actually form a pretty stable base that is not that reactive. </p>
                        <p><b>Making an Alkene on a Ring</b></p>
                        <p><i>E2 Reaction</i></p>
                        <img src={addbenring4} />
                        <p>Potassium tert-butoxide is a strong base, which pushes towards an E2 mechanism, enabling the creation of an alkene.</p>
                        <p><b>EAS Halogenation</b></p>
                        <img src={addbenring5} />
                        <p>One Br₂ with a catalyst like AlX₃ or FeX₃. Reminder that Br₂ itself is not strong enough to disrupt an aromatic ring. You need a catalyst!</p>
                        <p><b>New C-C Bond</b></p>
                        <p><i>EAS</i></p>
                        <img src={addbenring6} />
                        <p>When forming a Friedel-crafts alkylation, you can form a new C-C bond. That being said, the benzene ring product becomes more nucleophilic than the reactant <span>&#40;</span>because Methyl groups are electron-donating, so the aromatic ring will want to get rid of its extra electrons more, making it nucleophilic<span>&#41;</span>. Therefore, it is not super useful in synthesis due to polyalkylation! </p>
                    </div>
                )
            case 'alcohols':
                return(
                    <div>
                        <p><b>Addition of Halohydrin</b></p>
                        <p><i>Requires alkene in protonating conditions</i></p>
                        <img src={alcohol1} />
                        <p>The pi electrons from the alkene grab the bromine. Water then acts as the nucleophile, attacking the epoxide ring to relieve the steric hindrance. The nucleophile back attacks the more substituted carbon. This results in an inversion of stereochem and an anti addition of the alcohol and halide groups.</p>
                        <p><b>Anti-Diols</b></p>
                        <p><i>Dihydroxylation</i></p>
                        <img src={alcohol2} />
                        <p>mCPBA is used to form an epoxide through the use of an alkene. The ring is then opened by OH<sup>-</sup>, which adds itself to the opposite face. Then workup takes place to protonate the O<sup>-</sup>, to become OH, creating an anti-addition of two OH groups. </p>
                        <p><b>Syn-Diols</b></p>
                        <p><i>Dihydroxylation</i></p>
                        <img src={alcohol10} />
                        <p>The alkene is used to react with OsO<sub>4</sub> as step 1, and then H₂S is added to to create two alcohols on the same face. It is a syn diol because the oxygens are being added at the same time from the same molecule. </p>
                        <p><b>Using an Organometallic Reagent</b></p>
                        <img src={alcohol3} />
                        <p>Using an organometallic reagent allows for the reduction of a carbonyl into an alcohol. Remember to include workup and number your reaction when doing retrosynthesis! Workup can be indicated by writing “aqueous workup” or “H₂O”. This does not work with protic species because deprotonation will occur instead.</p>
                        <p><b>____</b></p>
                        <p><i> </i></p>
                        <img src={alcohol4} />
                        <p> </p>
                        <p><b>____</b></p>
                        <p><i> </i></p>
                        <img src={alcohol5} />
                        <p> </p>
                        <p><b>____</b></p>
                        <p><i> </i></p>
                        <img src={alcohol6} />
                        <p> </p>
                        <p><b>____</b></p>
                        <p><i> </i></p>
                        <img src={alcohol7} />
                        <p> </p>
                        <p><b>____</b></p>
                        <p><i> </i></p>
                        <img src={alcohol8} />
                        <p> </p>
                        <p><b>____</b></p>
                        <p><i> </i></p>
                        <img src={alcohol9} />
                        <p> </p>
                        <p><b>____</b></p>
                        <p><i> </i></p>
                        <img src={alcohol11} />
                        <p> </p>
                        <p><b>____</b></p>
                        <p><i> </i></p>
                        <img src={alcohol12} />
                        <p> </p>
                    </div>
                )
            case 'aldehydes':
                return(
                    <div>
                        <p><b>____</b></p>
                        <p><i> </i></p>
                        <img src={aldehyde1} />
                        <p> </p>
                        <p><b>____</b></p>
                        <p><i> </i></p>
                        <img src={aldehyde2} />
                        <p> </p>
                        <p><b>____</b></p>
                        <p><i> </i></p>
                        <img src={aldehyde3} />
                        <p> </p>
                        <p><b>____</b></p>
                        <p><i> </i></p>
                        <img src={aldehyde4} />
                        <p> </p>
                    </div>
                )
            case 'alkanes':
                return(
                    <div>
                        <p><b>Full Reduction from Alkyne</b></p>
                        <p><i>Requires alkyne</i></p>
                        <img src={alkane1} />
                        <p>H₂ is added on the same side across the pi bond. The alkyne turns into a cis alkene that reacts again with H₂, causing a further reduction. However, the reduction can be stopped at the alkene if Lindlar<span>&#39;</span>s catalyst is added.</p>
                        <p><b>Catalytic Hydrogenation</b></p>
                        <p><i>Syn addition of hydrogens</i></p>
                        <img src={alkane2} />
                        <p>Here you are reducing an alkene into an alkane by a syn addition of hydrogens. In order for this reaction to proceed, a catalyst such as Pd/C, Pt/C, or Ni/C is required. The catalyst consists of transition metals, which hold onto their electrons loosely, enabling this reaction to occur.</p>
                    </div>
                )
            case 'alkenes':
                return(
                    <div>
                        <p><b> Trans Alkene <span>&#40;</span>Birch Reduction<span>&#41;</span></b></p>
                        <img src={alkene1} />
                        <p>Birch Reduction, or also called dissolving metal reduction, is used to turn alkyne into a trans alkene.</p>
                        <p><b>Cis Alkene </b></p>
                        <p><i>Requires alkyne</i></p>
                        <img src={alkene2} />
                        <p>H₂ is added on the same side across the pi bond. The alkyne turns into a cis alkene and the addition of Lindlar<span>&#39;</span>s catalyst prevents further reduction into an alkane.</p>
                        <p><b>Aldol Condensation</b></p>
                        <img src={alkene3} />
                        <p>Adding heat helps to pop off an -OH group.</p>
                        <p><b>Generally Making Alkenes</b></p>
                        <p><i>E2 Reaction</i></p>
                        <img src={alkene4} />
                        <p>Potassium tert-butoxide is a strong base, which pushes towards an E2 mechanism, enabling the creation of an alkene.</p>
                    </div>
                )
            case 'alkynes':
                return(
                    <div>
                        <p><b>Double Elimination</b></p>
                        <img src={alkyne1} />
                        <p>Br₂ is added across the pi bond, which creates two leaving groups. The strong base in step two will pull off protons and then kick off bromines, creating an alkyne. Two equivalents of a strong base are necessary because there are more than two hydrogens that could be reacted with.</p>
                    </div>
                )
            case 'amidation':
                return(
                    <div>
                        <p><b>Amidation</b></p>
                        <img src={amide1} />
                        <p>Turning a carboxylic acid into an amide by adding heat. </p>
                    </div>
                )
            case 'c-c bonds':
                return(
                    <div>
                        <p><b>___</b></p>
                        <img src={ccbond1} />
                        <p> </p>
                        <p><b>___</b></p>
                        <img src={ccbond2} />
                        <p> </p>
                        <p><b>___</b></p>
                        <img src={ccbond3} />
                        <p> </p>
                        <p><b>___</b></p>
                        <img src={ccbond4} />
                        <p> </p>
                        <p><b>___</b></p>
                        <img src={ccbond5} />
                        <p> </p>
                        <p><b>___</b></p>
                        <img src={ccbond6} />
                        <p> </p>
                        <p><b>___</b></p>
                        <img src={ccbond7} />
                        <p> </p>
                    </div>
                )
            case 'carboxylic acids':
                return(
                    <div>
                        <p><b>___</b></p>
                        <img src={carboxy1} />
                        <p> </p>
                        <p><b>___</b></p>
                        <img src={carboxy2} />
                        <p> </p>
                    </div>
                )
            case 'deoxygenation':
                return(
                    <div>
                        <p><b>Carbonyl Deoxygenation</b></p>
                        <img src={deoxy1} />
                        <p>To turn a carbonyl into just a C-C bond, either use the Clemmensen Reduction for acidic conditions with Zn<span>&#40;</span>Hg<span>&#41;</span>, HCl, or the Wolff-Kishner Reduction for basic conditions with H₂N-N₂H, KOH, and heat.</p>
                    </div>
                )
            case 'epoxides':
                return(
                    <div>
                        <p><b>___</b></p>
                        <img src={epoxide1} />
                        <p> </p>
                        <p><b>___</b></p>
                        <img src={epoxide2} />
                        <p> </p>
                        <p><b>___</b></p>
                        <img src={epoxide3} />
                        <p> </p>
                    </div>
                )
            case 'esters':
                return(
                    <div>
                        <p><b>Making Esters</b></p>
                        <img src={ester1} />
                        <p>Note that this reaction can go in reverse, so you can make a carboxylic acid from an ester!</p>
                    </div>
                )
            case 'ethers':
                return(
                    <div>
                        <p><b>___</b></p>
                        <img src={ether1} />
                        <p> </p>
                        <p><b>___</b></p>
                        <img src={ether2} />
                        <p> </p>
                        <p><b>___</b></p>
                        <img src={ether3} />
                        <p> </p>
                    </div>
                )
            case 'imines':
                return(
                    <div>
                        <p><b>Imines</b></p>
                        <img src={imine1} />
                        <p>Adding an amine to a ketone in acid will form an imine. Note that the hemiaminal is an intermediary step but will naturally turn to an imine in acidic conditions, which is why we have H₂SO<sub>4</sub>. </p>
                    </div>
                )
            case 'ketones':
                return(
                    <div>
                        <p><b>___</b></p>
                        <img src={ketone1} />
                        <p> </p>
                        <p><b>___</b></p>
                        <img src={ketone2} />
                        <p> </p>
                        <p><b>___</b></p>
                        <img src={ketone3} />
                        <p> </p>
                        <p><b>___</b></p>
                        <img src={ketone4} />
                        <p> </p>
                        <p><b>___</b></p>
                        <img src={ketone5} />
                        <p> </p>
                        <p><b>___</b></p>
                        <img src={ketone6} />
                        <p> </p>
                        <p><b>___</b></p>
                        <img src={ketone7} />
                        <p> </p>
                    </div>
                )
            case 'rings':
                return(
                    <div>
                        <p><b>Diels Alder</b></p>
                        <p><i>6-Membered Ring</i></p>
                        <img src={ring1} />
                        <p>A diene reacts with a dienophile and must be reacted in heat. This is a concerted mechanism that happens in one step. </p>
                    </div>
                )
            // case 'tautomerization':
            //     return(
            //         <div>
            //             <p><b>___</b></p>
            //             <img src={taut1} />
            //             <p> </p>
            //             <p><b>___</b></p>
            //             <img src={taut2} />
            //             <p> </p>
            //         </div>
            //     )
            default: // ADD SOMETHING LATER??
            return null
        }
    }
    


    if (GoToReactions) {
        return <Navigate to="/" />
    }


    return (
        <div>
            <h1>SIKE! THAT'S A {location.state} !</h1>
            <div>
                {image()}
            </div>
            <button style={{ marginLeft: 6 }} onClick={() => { setGoToReactions(true) }}>return</button>
        </div>
    )
}

export default Reactions;





// <p> This is known as Jone<span>&#39;</span>s Reagent, which includes chromate which is a very good oxidizing agent. Jone<span>&#39;</span>s Reagent can also be seen as H₂CrO₄ or Na₂Cr₂O<sub>7</sub>.</p>