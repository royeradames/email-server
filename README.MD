## Why?
Get your contact form to send the form data to your email of choice. 

## What?
This is a simply email server that can use your desire google account to send that collected form a form to your desire email.

## How to setup your GMAIL sender account
Note: 
<ul>
    <li> On your local machine google prefers your password. </li>
    <li> I recommend a dedicated email has the sender email </li>
</ul>

 ### Step-1: 
 Log in to your gmail account.
 ### Step-2: 
 Enable less secure app access and/or DisplayUnlockCaptcha on your gmail account.
 ### Step-3: Follow a 6-step guide on 
https://support.google.com/accounts/answer/185833?hl=en
 ### Step-4: 
Replace your transporter password with the 16-character generated app password you obtain from Step-3 above.   
These four easy steps solved my problem. Feel free to leave a reply message, 
if you get stuck, I'm happy to assist you. Otherwise, if this helped you in 
any way, go ahead and vote my answer "This answer was useful. Best wishes!!!

## How to use?
### populate enviroment variables
After you setup the sender email populate the environment variables:
<ul>
    <li> GMAIL_USER </li>
    <li> GMAIL_PASS </li>
    <li> RECEIVER_EMAIL </li>
</ul>

### endpoint
Send a post request to "NameOfYourServerUrl/mail/"
You must send this values:
<ul>
    <li> name: must be only letter. Spaces are ignore. </li>
    <li> email: must be formated has an email. </li>
    <li> message: spaces are trim. </li>
</ul>

#### Expected response:
```json
{
    "accepted": [
        "receiveremail@gmail.com"
    ],
    "rejected": [],
    "envelopeTime": 235,
    "messageTime": 1450,
    "messageSize": 342,
    "response": "250 2.0.0 OK  1628704885 71sm11123642qkk.26 - gsmtp",
    "envelope": {
        "from": "emailvalue@test.com",
        "to": [
            "receiveremail@gmail.com"
        ]
    },
    "messageId": "<c0509e58-0f74-32d4-3f55-ef279ed03077@test.com>"
}
```

#### If there is any error:
```json
{
    "error": {
        "code": "EAUTH",
        "response": "534-5.7.9 Application-specific password required. Learn more at\n534 5.7.9  https://support.google.com/mail/?p=InvalidSecondFactor o26sm6004182qkm.29 - gsmtp",
        "responseCode": 534,
        "command": "AUTH PLAIN"
    }
}
```