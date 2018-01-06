import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="main-content">
    <div className="content-section">
      <h2>Helping our clients create order from chaos.</h2>
      <p>Practical Systems is a professional organization firm specializing in creating efficient and effective working systems and environments individually tailored for each client.</p>
    </div>
    <div className="content-section">
      <h3>How we can help you.</h3>
      <p>Practical Systems offers a wide variety of services to our clients. We understand that every project is individual, so systems are tailored to the specific needs of our clients, taking into consideration goals, the data being organized, the work environment, and any other pertinent details. We help our clients to develop the plans and then put those plans into action. By being more organized, you are able to be more productive in the time that you have available in each day.</p>
    </div>
    <div className="content-section">
      <h3>What we do.</h3>
      <ul style={{  }}>

      </ul>
      <ul style={{ listStyle: 'none', margin: 0, }}>
        <li style={{ margin: 0 }}>General Office Organization</li>
        <li style={{ margin: 0 }}>Streamlining of Current Systems and/or Processes</li>
        <li style={{ margin: 0 }}>Individualized Filing Systems​</li>
        <li style={{ margin: 0 }}>Database development</li>
        <li style={{ margin: 0 }}>Insurance Claims Management, including medical</li>
        <li style={{ margin: 0 }}>Gather and Organize Documents for Taxes and Estate Management</li>
        <li style={{ margin: 0 }}>Expense Accounts</li>
        <li style={{ margin: 0 }}>Special Projects</li>
        <li style={{ margin: 0 }}>Ongoing Oversight</li>
      </ul>
    </div>
    <div className="content-section">
      <h3>Who we are.</h3>
      <p>Sally Thacher has been working in professional organization for more than 30 years. Prior to forming Practical Systems, her experience encompassed management consulting, economic development, legal research, office administration, and business development.</p>
      <p>The staff has been carefully selected and trained to deliver the individualized services with a unique blend of skills and knowledge and for which Practical Systems is so well known.</p>
    </div>
    <div className="content-section">
      <h3>What our clients are saying.</h3>
      <p className="quote">
        "Practical Systems has put order and organization into a totally chaotic office... Sally is an absolute joy to work with... [She] basically took a totally disorganized and system-less office and set it's staff on the path toward calm and competent management processes."
      </p>
      <p className="quote-by"> -- Corporate Client, Print Journalism</p>
      <p className="quote">
        "There are no words for me to describe how completely wonderful Sally Thacher is. Everything she did she did with humor, intelligence, kindness and warmth. She got along well with everyone and she made herself indispensable without making us feel dependent."
      </p>
      <p className="quote-by"> -- Individual Client</p>
      <p className="quote">
        "In all cases she has met and even surpassed our expectations."
      </p>
      <p className="quote-by"> -- Corporate Client, Investment Bank</p>
    </div>
    <div className="content-section">
      <h3>Contact us.</h3>
      <p>We would love to chat with you about your project, whether we decide to work together or if we can help you to find the right match. Send an email to at <Link to="mailto:info@practicalsystems.org"
          style={{
            color: '#212F3D',
          }}>info@practicalsystems.org</Link> or give us a call at 301.656.7544</p>
          {/* <p>, or fill out the form below.</p> */}
      {/* <form action="https://formspree.io/your@email.com" method="POST">
        <input className="form-field" type="text" name="name" placeholder="Name"/>
        <input className="form-field" type="email" name="_replyto" placeholder="Email" />
        <input className="form-field" type="text" name="subject" placeholder="Subject"/>
        <input className="form-field" type="text" name="message" placeholder="Message"/>
          <input className="send-button" type="submit" value="Send" />
      </form> */}
    </div>
  </div>
)

export default IndexPage
