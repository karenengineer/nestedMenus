import { MenuItem } from "src/app/models/menu-item.model";

export const MENU_ITEMS: MenuItem[] = [
  {
    displayName: 'Angular Nested Menus',
    iconName: 'close',
    expanded: false,
    children: [
      {
        displayName: 'Speakers',
        iconName: 'group',
        expanded: false,
        children: [
          {
            displayName: 'Michael Prentice',
            iconName: 'person',
            expanded: false,
            children: [
              {
                displayName: 'Speech topics',
                expanded: false,
                children: [
                  {
                    displayName: 'The Impact of Artificial Intelligence on Society',
                    iconName: 'star',
                    expanded: false,
                  },
                  {
                    displayName: 'Climate Change and its Global Consequences',
                    iconName: 'star',
                    expanded: false,
                    children: [
                      {
                        displayName: 'The Future of Renewable Energy Sources',
                        iconName: 'star',
                        expanded: false,
                      },
                      {
                        displayName: 'The Benefits and Risks of Space Exploration',
                        iconName: 'star',
                        expanded: false,
                        children: [{
                          displayName: 'Cyber-security in the Digital Age',
                          iconName: 'star',
                          expanded: false,
                        }]
                      },
                    ]
                  },
                  {
                    displayName: 'The Importance of Mental Health Awareness',
                    iconName: 'star',
                    expanded: false,
                  },
                ]
              },
            ],
          },
          {
            displayName: 'Stephen Fluin',
            iconName: 'person',
            expanded: false,
            children: [
              {
                displayName: 'Speech topics',
                expanded: false,
                children: [{
                  displayName: 'Exploring Cultural Diversity and Inclusion in Today\'s World',
                  expanded: false
                }]
              },
            ],
          },
          {
            displayName: 'Mike Brocchi',
            iconName: 'person',
            expanded: false,
            children: [
              {
                displayName: 'Speech topics',
                expanded: false,
                children: [{
                  displayName: 'The History and Significance of Women\'s Rights Movements',
                  expanded: false,
                  children: [
                    {
                      displayName: 'My ally, the CLI',
                      iconName: 'star',
                      expanded: false,
                    },
                    {
                      displayName: 'Become an Angular Tailor',
                      iconName: 'star',
                      expanded: false,
                    },
                  ]
                }]
              },
            ],
          },
        ],
      },
    ],
  },
];




