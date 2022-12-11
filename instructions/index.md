# Assignment Scenario
As a UI developer, you have joined a game development company that is working on its new card game: Superhero Clash!
Before you joined the company, the game development has already started, project for the game development already exists, and some first features have been already delivered.
Your goal is to familiarise yourself with the codebase and implement stories S-01, S-02, and S-03, that were assigned to you. See the stories' descriptions below in section 'Assignment Instructions'.


## Superhero Game Description
- The game is a card game for 2 players.
- The game interaction logic is not developed yet, so the game is not actually playable.
- The game UI has two parts: admin UI form and a game board UI.
- In admin UI form, user can add superheroes (superhero cards) to the list of available cards for the game.
- Game board UI displays the initialised game with two set of cards, one for each player, randomly picked from the list of available cards.
- The number of cards assigned to each player is determined by a hardcoded constant in the code.


## Codebase Description 
Superhero Clash is an application simulating a card game in in-development stage. The application consists of two parts:
- `superhero-game-ui` (UI part) and
- `superhero-game-server` (BE part).

The assignment's tasks require making changes only in the superhero-game-ui project. BE part is there just to be used as a data source that is exposed to UI via REST API.

In the codebase, admin UI form is not implemented, and it does not display the list of available cards.
Also, Admin UI is not displayed in a separate screen from Game Board UI.
And what's more, there are also inline styles used for styling!

The goal of this assignment is to fix all the missing/wrongly implemented things described above.

### Superhero-game-ui
To run superhero-game-ui project:
- Install project dependencies using `npm i`.
- Run project using `npm run start`. 

To run tests in superhero-game-ui project: 
- Execute command `npm run test` 

### Superhero-game-server
To run superhero-game-server project on your local machine:
- Install project dependencies using `npm i`.
- Run project using `npm run start`.

BE will be then accessible to UI on http://localhost:3000/ with the following BE REST API exposed (OpenAPI Spec): 

```
{ 
  '/api/superheroes': {
    'get': {
      'description': 'Returns list of available superheroes',
      'responses': {
        '200': {
          'description': 'List of available superheroes',
          'content': {
            'application/json': {
              'schema': {
                'type': 'array',
                'items': {
                  '$ref': '/#/components/schemas/Superhero'
                }
              }
            }
          }
        }
      }
    },
    'post': {
      'description': 'Create a new superhero',
      'requestBody': {
        'content': {
          'application/json': {
          'schema': {
            "$ref": "#/components/schemas/Superhero"
          }
        },
        'responses': {
          '200': {
            'description': 'Superhero created successfully',
          }
        }
      }
    }
  },
  'components': {
    'schemas': {
      'Superhero': {
        'type': 'object',
        'properties': {
          'name': 'string',
          'attackScore': 'number',
          'defenseScore': 'number'
        }
      }
    }
  }
}
```

## Assignment Instructions
The assignment is divided into 3 independent dev stories. The goal is to implement each story in production-grade
quality for an enterprise software. It is allowed to use 3-rd party libraries, but please use only those which you would 
normally use in an enterprise SW.  

Game interaction logic is not part of the assignment.

### Story S-01: Routing
- Separate Admin UI from the Game board UI, so both can be rendered on separate screens/pages. 
- Add routing logic to the application and configure 2 routes - one for Admin UI page and one for the Game board UI page.
- Add a simple page navigation containing a link to each page route.

### Story S-02: Adding superhero cards
- In the Admin UI, implement a form for adding new superheros and use application's BE REST API GET '/api/superheroes' and POST '/api/superheroes' to create and fetch superheroes.
  Application's BE API is implemented as a separate NodeJs app in superhero-game-server directory and can be run using `npm run start`. More info in 'Superhero-game-server' section above.
- List all the added/available superheroes in the admin page - superheroes should be retrieved from BE using GET '/api/superheroes' REST API.
- Add tests.

### Story S-03: Replace inline styles with component-scoped styles
- Existing UI components use inline styles for styling, which is not a best practice.
- Goal of this task is to refactor the existing styling into component-scoped styles (and optionally some global styles
  if needed).
