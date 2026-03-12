# Feature Research

**Domain:** Nonprofit summer camp marketing website redesign
**Researched:** 2026-03-12
**Confidence:** HIGH

## Feature Landscape

### Table Stakes (Users Expect These)

Features users assume exist. Missing these = product feels incomplete.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Clear audience-based primary navigation | Families, donors, and staff applicants all need to self-select quickly on arrival | LOW | IA should expose distinct paths like Attend Camp, Give, and Work With Us without hiding shared mission content |
| Trust-building camp overview and program details | Families expect concrete answers on ages, session basics, supervision, values, and what camp is actually like | MEDIUM | Requires migrated content, concise FAQs, and plain-language explanations of residential experience and community care |
| Persistent external conversion CTAs | Marketing sites for camps are expected to make registration, donation, and application actions obvious from every key page | LOW | Depends on stable external links to Active Camps, DonorPerfect, and Google Forms; should support repeated CTA placement |
| Scholarship and affordability information | Families and donors both expect transparent affordability guidance from a mission-driven camp | LOW | Should explain scholarship availability, no-one-turned-away positioning, and the relationship between gifts and camper access |
| Community care, safety, and inclusion content | LGBTQ+ youth camp sites must proactively address emotional safety, pronouns, accommodations, and camp culture | MEDIUM | Needs careful content strategy and leadership review more than engineering complexity |
| Staff roles and application expectations | Staff applicants expect role descriptions, dates, qualifications, and what the experience offers them | LOW | Can remain content-forward with links to external applications; may include counselor, specialist, and junior counselor/SIT pathways |
| Mobile-first, accessible content experience | Families and donors commonly browse on phones and expect readable, accessible nonprofit sites | MEDIUM | Requires responsive design, semantic structure, keyboard support, alt text, color contrast, and performant pages |
| Contact and practical next-step information | Users expect a way to ask questions before committing money, time, or a child’s enrollment | LOW | Include contact routes, response expectations if available, and contextual prompts near decision points |

### Differentiators (Competitive Advantage)

Features that set the product apart. Not required, but valuable.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Scholarship impact storytelling integrated into donation flow | Helps donors understand exactly how gifts translate into camper access, improving conversion and average gift confidence | MEDIUM | Best paired with concise impact blocks, scholarship examples, and donation CTA placement throughout family-facing and mission pages |
| Family trust journey with camp-life preview | Reduces uncertainty by showing what a day, week, and community experience actually feel like for queer and trans youth | MEDIUM | Could include day-in-the-life content, photo storytelling, preparation expectations, and first-time family reassurance |
| Staff value proposition beyond job listing | Makes recruitment stronger by presenting staff community, mentorship, and mission impact instead of only duties | LOW | Strong copy and testimonials can differentiate without custom application tooling |
| Donor trust layer around fiscal sponsorship | Clarifies the Ashrei Foundation relationship, tax-deductibility, and stewardship credibility, reducing friction at the donation decision point | LOW | Content and design treatment matter more than engineering; should appear before users leave for DonorPerfect |
| Mission-rich social proof and testimonials by audience | Tailored quotes or stories for families, donors, and staff make the site feel specific and credible rather than generic | MEDIUM | Requires curation, permissions, and content governance; implementation itself is straightforward |
| Seasonal urgency modules | Supports time-sensitive registration, giving, and hiring pushes without rebuilding the site structure | MEDIUM | Best handled with configurable content sections or lightweight data-driven banners rather than a full CMS |

### Anti-Features (Commonly Requested, Often Problematic)

Features that seem good but create problems.

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| Rebuilding registration, donation, or staff application in-site | Keeping users on one domain feels smoother and more branded | High operational risk, compliance burden, and duplicated workflow maintenance for a mostly marketing site | Keep external systems, but improve handoff pages, trust copy, CTA design, and expectation-setting before click-through |
| Full CMS/editorial platform for all content | Nonprofits often assume every redesign needs flexible publishing | Adds ongoing maintenance and training overhead when updates are occasional and content is relatively stable | Use a lightweight content structure or simple data files for key reusable sections and seasonal updates |
| Donor gimmicks like animated counters or overly emotional popups | Teams hope motion or pressure tactics will increase giving | Can reduce trust, feel manipulative, and distract from the mission for a sensitive youth-focused nonprofit | Use credible impact framing, fiscal sponsorship clarity, and strategically repeated scholarship CTAs |
| Separate microsites per audience | Seems like a clean way to tailor messaging for families, donors, and staff | Fragments SEO, duplicates content, and increases maintenance while weakening shared mission narrative | Build one coherent site with audience-specific pathways and shared foundational pages |
| Live chat or always-on support tooling | Feels helpful for answering family questions instantly | Requires staffing discipline and risks unmonitored or delayed responses in a high-trust context | Strong FAQ content, clear contact channels, and expectation-setting around response times |

## Feature Dependencies

```text
[Scholarship donation conversion]
    └──requires──> [Donation landing sections with clear impact messaging]
                       └──requires──> [Confirmed donation URL and Ashrei Foundation trust copy]

[Family registration conversion]
    └──requires──> [Camp overview, community care, and practical FAQ content]
                       └──requires──> [Content migration from current site]

[Staff application conversion]
    └──requires──> [Staff role pages and culture/value proposition]
                       └──requires──> [Confirmed application links and hiring details]

[Seasonal urgency modules] ──enhances──> [Registration and donation CTAs]

[Heavy CMS adoption] ──conflicts──> [Low-maintenance v1 architecture]
```

### Dependency Notes

- **Scholarship donation conversion requires donation landing sections with clear impact messaging:** Donors need enough context and confidence before leaving the site for an external form.
- **Donation landing sections with clear impact messaging require confirmed donation URL and Ashrei Foundation trust copy:** The handoff only works if the destination and sponsorship explanation are accurate.
- **Family registration conversion requires camp overview, community care, and practical FAQ content:** Families will not click out to register without first understanding safety, fit, and logistics.
- **Camp overview, community care, and practical FAQ content require content migration from current site:** The existing WordPress content is the primary source of trusted facts and language.
- **Staff application conversion requires staff role pages and culture/value proposition:** Applicants need both role clarity and emotional reasons to join.
- **Staff role pages and culture/value proposition require confirmed application links and hiring details:** Strong recruitment content still depends on accurate external destinations and up-to-date expectations.
- **Seasonal urgency modules enhance registration and donation CTAs:** Timely reminders can increase action during enrollment, fundraising, and hiring windows.
- **Heavy CMS adoption conflicts with low-maintenance v1 architecture:** A complex publishing stack works against the project’s explicit maintainability goal.

## MVP Definition

### Launch With (v1)

Minimum viable product — what's needed to validate the concept.

- [ ] Audience-based navigation and homepage messaging — essential so families, donors, and staff can find their path immediately
- [ ] Trust-building camp overview and community care content — essential for family confidence and mission clarity
- [ ] Scholarship-forward donation pathway — essential because scholarship support is a primary conversion goal
- [ ] Staff recruitment pages with clear external apply CTAs — essential to support seasonal hiring without custom tooling
- [ ] Repeated external CTAs for register, donate, and apply — essential because the site’s main job is qualified handoff
- [ ] Mobile-accessible responsive experience — essential for baseline usability and credibility

### Add After Validation (v1.x)

Features to add once core is working.

- [ ] Audience-specific testimonials and story modules — add once content assets and permissions are ready
- [ ] Seasonal campaign banners or homepage swaps — add once the team identifies recurring calendar-based messaging needs
- [ ] Lightweight analytics around outbound CTA performance — add once baseline conversion paths are live and measurable

### Future Consideration (v2+)

Features to defer until product-market fit is established.

- [ ] Lightweight content editing workflow for non-technical updates — defer until the team proves frequent enough update volume
- [ ] Rich media camp preview experiences — defer until photo/video assets and production capacity justify the effort
- [ ] Personalized donor journeys or campaign segmentation — defer until there is evidence that advanced fundraising UX will materially outperform simpler messaging

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Audience-based navigation and homepage pathing | HIGH | LOW | P1 |
| Camp overview plus community care content | HIGH | MEDIUM | P1 |
| Scholarship-forward donation messaging and CTA system | HIGH | MEDIUM | P1 |
| Staff recruitment pages with external apply handoff | HIGH | LOW | P1 |
| Testimonials and audience-specific social proof | MEDIUM | MEDIUM | P2 |
| Seasonal urgency modules | MEDIUM | MEDIUM | P2 |
| Lightweight analytics for outbound conversions | MEDIUM | LOW | P2 |
| Rich media camp-life previews | MEDIUM | HIGH | P3 |
| Lightweight content editing workflow | LOW | MEDIUM | P3 |

**Priority key:**
- P1: Must have for launch
- P2: Should have, add when possible
- P3: Nice to have, future consideration

## Competitor Feature Analysis

| Feature | Competitor A | Competitor B | Our Approach |
|---------|--------------|--------------|--------------|
| Family trust and camp overview | Many youth camp sites focus on logistics first and values second | Values-driven nonprofit camps often lead with mission but bury practical answers | Combine affirming mission language with concrete family decision content in the same journey |
| Donation conversion | Nonprofit camps often isolate giving to a simple donate page | Stronger nonprofit sites connect giving to a named impact outcome like scholarships | Make scholarship support a repeated, narrative-backed conversion path instead of a footer-only ask |
| Staff recruiting | Many camps use a generic jobs page with minimal culture context | Better camps explain why staff community matters and what candidates gain | Present staff roles, expectations, and emotional value proposition together before the external form |

## Sources

- [PROJECT.md](C:/Users/dsbog/danielbogard.com/.planning/PROJECT.md)
- Existing project constraints and audience definitions captured from the current Camp Indigo Point website in project research
- Common patterns across nonprofit, camp, and mission-driven marketing websites: audience-based navigation, trust content, strong CTA handoffs, donor impact framing, and mobile-first accessibility expectations

---
*Feature research for: nonprofit summer camp marketing website redesign*
*Researched: 2026-03-12*
