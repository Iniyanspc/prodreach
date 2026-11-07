import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { company } from '../../data/catalog';
import { Logo } from '../../shared/logo';

/**
 * Enquiry form. There is no backend yet, so submitting opens the visitor's email app
 * with a pre-filled message to info@prodreach.co.in. Swap `send()` for a form service later.
 */
@Component({
  selector: 'pr-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Logo],
  template: `
    <section class="contact">
      <div class="wrap grid">
        <div class="info">
          <span class="eyebrow">Get in touch</span>
          <h1 class="display">Let's<br />Talk<br /><span class="sky">Uniforms.</span></h1>
          <p>Share your requirement — product, quantity, colours and timeline — and our team will match it to the right manufacturer and come back with samples and pricing.</p>

          <ul class="lines">
            <li><span class="eyebrow">Website</span><a [href]="'https://' + c.website" target="_blank" rel="noopener">{{ c.website }}</a></li>
            <li><span class="eyebrow">Email</span><a [href]="'mailto:' + c.email">{{ c.email }}</a></li>
            <li><span class="eyebrow">Phone</span><a [href]="'tel:' + c.phoneIntl">{{ c.phone }}</a></li>
          </ul>
          <a [href]="c.whatsapp" target="_blank" rel="noopener" class="btn wa">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2s.2-1.1.1-1.2l-.5-.2z"/></svg>
            Chat on WhatsApp
          </a>
          <pr-logo [onDark]="true" [size]="34" class="logo" />
        </div>

        <form class="form" (submit)="send($event)" novalidate>
          <h2>Request a Quote</h2>
          <div class="row">
            <label>Name<input name="name" required autocomplete="name" /></label>
            <label>Organisation<input name="org" autocomplete="organization" /></label>
          </div>
          <div class="row">
            <label>Email<input name="email" type="email" required autocomplete="email" /></label>
            <label>Phone<input name="phone" type="tel" autocomplete="tel" /></label>
          </div>
          <div class="row">
            <label>I'm interested in
              <select name="interest">
                <option>Corporate Apparel</option>
                <option>StrideOn Footwear</option>
                <option>Bags, Socks &amp; Caps</option>
                <option>Full Uniform Set</option>
                <option>Enterprise Solutions</option>
              </select>
            </label>
            <label>Approx. quantity<input name="qty" inputmode="numeric" placeholder="e.g. 500" /></label>
          </div>
          <label>Requirement<textarea name="message" rows="5" placeholder="Styles, material codes, colourways, sizes, timeline…"></textarea></label>
          @if (error()) { <p class="err" role="alert">{{ error() }}</p> }
          <button class="btn" type="submit">Send Enquiry</button>
          <p class="hint">This opens your email app with the details filled in, addressed to {{ c.email }}.</p>
        </form>
      </div>
    </section>
  `,
  styles: `
    .contact { background: var(--ink); color: var(--on-dark); padding: clamp(56px, 8vw, 104px) 0; }
    .grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: clamp(36px, 6vw, 88px); }
    .info .eyebrow { color: var(--on-dark-soft); }
    .info .display { color: #fff; margin: 12px 0 24px; }
    .sky { color: var(--sky); }
    .info > p { color: var(--on-dark-soft); max-width: 44ch; }
    .lines { list-style: none; padding: 0; margin: 32px 0; border-top: 1px solid var(--rule-dark); }
    .lines li { display: flex; justify-content: space-between; align-items: baseline; gap: 16px; padding: 14px 0; border-bottom: 1px solid var(--rule-dark); flex-wrap: wrap; }
    .lines .eyebrow { font-size: 0.64rem; }
    .lines a { color: #fff; text-decoration: none; font-family: var(--font-head); font-weight: 600; letter-spacing: 0.04em; }
    .lines a:hover { color: var(--sky); }
    .wa { background: #1fa855; border-color: #1fa855; }
    .wa:hover { background: #168a45; border-color: #168a45; }
    .logo { display: flex; margin-top: 48px; }

    .form { background: #fff; color: var(--text); padding: clamp(24px, 4vw, 48px); display: grid; gap: 18px; align-content: start; }
    .form h2 { font-family: var(--font-display); font-weight: 400; text-transform: uppercase; font-size: clamp(2.4rem, 4vw, 3.2rem); line-height: 1; margin-bottom: 4px; }
    .row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
    label { display: grid; gap: 6px; font-family: var(--font-head); font-weight: 700; font-size: 0.7rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-soft); }
    input, select, textarea {
      font: inherit; font-family: var(--font-body); font-weight: 400; font-size: 1rem; letter-spacing: 0; text-transform: none; color: var(--text);
      border: 0; border-bottom: 1.5px solid #c4c8cf; background: var(--mist); padding: 12px 12px; border-radius: 0; width: 100%;
    }
    input:focus, select:focus, textarea:focus { outline: none; border-bottom-color: var(--blue); background: #fff; }
    textarea { resize: vertical; }
    .form .btn { justify-self: start; margin-top: 4px; }
    .err { margin: 0; color: #c62828; font-size: 0.9rem; }
    .hint { margin: 0; font-size: 0.8rem; color: var(--muted); }

    @media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }
    @media (max-width: 520px) { .row { grid-template-columns: 1fr; } }
  `,
})
export class Contact {
  protected readonly c = company;
  protected readonly error = signal('');

  protected send(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const f = new FormData(form);
    const get = (k: string) => String(f.get(k) ?? '').trim();

    if (!get('name') || !get('email')) {
      this.error.set('Please add your name and email so we can reply.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get('email'))) {
      this.error.set('Please enter a valid email address.');
      return;
    }
    this.error.set('');

    const subject = `Enquiry: ${get('interest')}${get('org') ? ' — ' + get('org') : ''}`;
    const body = [
      `Name: ${get('name')}`,
      `Organisation: ${get('org')}`,
      `Email: ${get('email')}`,
      `Phone: ${get('phone')}`,
      `Interested in: ${get('interest')}`,
      `Approx. quantity: ${get('qty')}`,
      '',
      get('message'),
    ].join('\n');

    window.location.href = `mailto:${this.c.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
