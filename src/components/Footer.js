import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.jpeg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter has-text-centered">
        <div className="column is-12">
          <section style={{
    fontFamily:'Pyidaungsu',fontSize:"18px"}} >        
            ဝင်ရောက်လေ့လာခြင်းအတွက် ကျေးဇူးအထူးတင်ပါသည်။
             ဝက်(ဘ်)ဆိုက် တွင် ကျန်ရှိနေသော အချက်အလက်များကို ဆက်လက်ဖြည့်သွင်းသွားဦးမည်ဖြစ်ပါသည်။
          </section>
        </div>
      </footer>
    )
  }
}

export default Footer
