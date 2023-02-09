import { html } from 'lit';
import '../src/web-component-card.js';

export default {
  title: 'WebComponentCard',
  component: 'web-component-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <web-component-card
      style="--web-component-card-background-color: ${backgroundColor ||
      'white'}"
      .title=${title}
    >
    </web-component-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
