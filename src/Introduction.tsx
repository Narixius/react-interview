import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

const readme = `

# Dynamic Form Renderer

In this scenario, we are trying to render a dynamic for in the page

The fields list should be fetch from \`https://form-api-eight.vercel.app/api/form\`


## Api structure

The api returns a 2D array wich contains some objects.

Every array in the first dimension of the array refers to each row.

Each object has these fields
\`\`\`
[
  [
    {
      name: 'first_name',
      component: 'input', // one of ['input', 'textarea', 'select'],
      props: {
        defaultValue: 'Robbin',
        placeholder: 'Firstname'
      }
    },
    {
      name: 'last_name',
      component: 'input', // one of ['input', 'textarea', 'select'],
      props: {
        defaultValue: 'Williams',
        placeholder: 'Lastname'
      }
    }
  ],
  [
    {
      name: 'gender',
      component: 'select', // one of ['input', 'textarea', 'select'],
      props: {
        list: [
          {
            id: 1,
            title: 'Male',
            value: 'male'
          },
          {
            id: 2,
            title: 'Female',
            value: 'female'
          }
        ]
      }
    }
  ],
  [
    {
      name: 'message',
      component: 'textarea', // one of ['input', 'textarea', 'select'],
      props: {

      }
    }
  ]
]
\`\`\`


## Input props
\`\`\`
{
  value: 'some text',
  placeholder: '',
}
\`\`\`


## Textarea props
\`\`\`
{
  value: 'some text here',
  placeholder: '',
}
\`\`\`

## Select props
\`\`\`
{
  value: 'item-1',
  list: [
    {
      id: '',
      title: 'Item 1',
      value: 'item-1'
    }
  ]
}
\`\`\`

# Steps

1. Complete the \`useFetch\` hook in the \`hooks/useFetch.ts\`
2. Call the api using \`useFetch\` hook inside the \`FormRenderer.tsx\`. (It is called before)
3. Render the form based on the api response.
4. Print the form value onSubmit.

hint: The components are defined before.

`;
export const Introduction: React.FC = () => {
  return (
    <div className="p-4">
      <ReactMarkdown children={readme} />
      <Link to="/" className="text-blue-500 block">
        Start implementation
      </Link>
    </div>
  );
};
