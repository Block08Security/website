import { GITHUB_REPO } from '../pentest/constants'

export const ASSESS_GUIDE_STEPS = [
  {
    key: 'url',
    number: '01',
    title: 'Enter your website',
    body: 'Paste the URL you own or have written permission to test. Confirm authorization, then start.',
  },
  {
    key: 'signin',
    number: '02',
    title: 'Sign in with your GitHub',
    body: `A GitHub tab opens. Sign in, or create a free account, as yourself. This is how we know a real person queued the scan on ${GITHUB_REPO}. Block08 never sees your password.`,
  },
  {
    key: 'issue',
    number: '03',
    title: 'Submit the pre-filled issue',
    body: `The issue on ${GITHUB_REPO} is already filled in. Do not change the title. Click Submit new issue, that single click starts the toolkit.`,
  },
  {
    key: 'report',
    number: '04',
    title: 'Return here for the report',
    body: 'Come back to this tab and wait. When curl, openssl and dig finish, the public report is published in the registry.',
  },
] as const

export type AssessGuideStepKey = (typeof ASSESS_GUIDE_STEPS)[number]['key']
