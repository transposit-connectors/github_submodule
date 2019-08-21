/**
 * This operation is an example of a JavaScript operation deployed as a Webhook
 * and configured to work with Slack.
 *
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/building/webhooks
 */
({ http_event }) => {
  const parsed_body = http_event.parsed_body;

  if (parsed_body.ref === `refs/heads/${env.get('submoduleBranch')}`) {
    console.log(api.run('this.test_update_submodule'));
  } else {
    console.log(`Skipped push to ${parsed_body.ref}. Configured for ${env.get('submoduleBranch')}.`);
  }

  return { status_code: 200 };
}
