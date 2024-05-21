import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, organization, profession, streetAdd, city, state, pincode, country, telephone, fax, mobile, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: "sandbro7163337@gmail.com",
      pass: "nsne npwq rfti xqbw",
    },
  });

  const mailOptions = {
    from: email,
    to: 'sandbro7163337@gmail.com', // replace with your recipient
    subject: 'Contact Form Submission',
    text: `
      Name: ${name}
      Organization: ${organization}
      Profession: ${profession}
      Street Address: ${streetAdd}
      City: ${city}
      State: ${state}
      Pincode: ${pincode}
      Country: ${country}
      Telephone: ${telephone}
      Fax: ${fax}
      Mobile: ${mobile}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email: ', error);
    return new Response(JSON.stringify({ message: 'Error sending email', error }), { status: 500 });
  }
}
