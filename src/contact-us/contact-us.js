import './contact-us.css';

export function initContactUsPage() {
    document.querySelector('#contact-us').innerHTML = `
            <div class="centered-container">
            <div class="contact-us-wrapper">
            <h2>Contact us</h2>
            <form>
                <div class="content-wrapper">
                <div><label for="name-input">Name</label></div>
                <div><input id="name-input" type="text" name="name" /></div>
                </div>

                <div class="content-wrapper">
                <div><label for="email-input">Email <span class="required">*</span></label></div>
                <div><input id="email-input" type="email" name="name" required /></div>
                </div>

                <div class="content-wrapper">
                <div><label for="note-textarea">Note <span class="required">*</span></label></div>
                <div><textarea id="note-textarea" required maxlength="200"></textarea></div>
                </div>

                <div class="content-wrapper">
                <button type="submit" class="btn">Submit</button>
                </div>
            </form>
            </div>
        </div>
    `; 
}
