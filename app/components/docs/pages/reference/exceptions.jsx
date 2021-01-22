import React from 'react';

require('./Exceptions.css');

const properties = [
  {
    name: 'Broken refrigerators',
    description: 'Hazardous materials disposal fee of $25',
  },
  {
    name: 'CRT televisions',
    description: '$1 per inch',
  },
  {
    name: 'Smaller appliances such as microwaves and dishwashers',
    description: 'Should be accompanied by a larger appliance or they will be charged a small service fee of $20',
  },
  {
    name: 'Appliances not in a conveniently accessible location',
    description: 'Service fee of $35',
  },
  {
    name: 'Remote location',
    description: 'Distance fee of $20',
  },
  {
    name: 'Pickups which need to be rushed',
    description: 'Instead of being grouped will also be charged a fee of $35',
  },
];

const Exceptions = () => (
  <div className="exception-component-1">
    <h3>Charges are subject to change depending on the details surrounding the pickup</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {
          properties.map((prop) => {
            const { name, description } = prop;
            return (
              <tr key={prop.name}>
                <td className="blue-td">{name}</td>
                <td className="red-td">{description}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  </div>
);

export default Exceptions;
