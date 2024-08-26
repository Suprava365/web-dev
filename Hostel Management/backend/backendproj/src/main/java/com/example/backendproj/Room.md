Here are the JSON objects for testing CRUD operations with the `Room` model in a Markdown file.

### rooms.json

```markdown
## Room JSON Objects for CRUD Operations

### Create Room (POST)
```json
{
  "roomName": "Room A",
  "roomType": "Single",
  "floor": "1",
  "description": "A single room on the first floor."
}
```

### Get All Rooms (GET)
```json
[
  {
    "id": 1,
    "roomName": "Room A",
    "roomType": "Single",
    "floor": "1",
    "description": "A single room on the first floor."
  },
  {
    "id": 2,
    "roomName": "Room B",
    "roomType": "Double",
    "floor": "2",
    "description": "A double room on the second floor."
  }
]
```

### Get Room by ID (GET)
```json
{
  "id": 1,
  "roomName": "Room A",
  "roomType": "Single",
  "floor": "1",
  "description": "A single room on the first floor."
}
```

### Update Room (PUT)
```json
{
  "roomName": "Room A",
  "roomType": "Double",
  "floor": "1",
  "description": "A double room on the first floor."
}
```

### Delete Room (DELETE)
```json
{
  "id": 1
}
```
```

### Explanation:

- **Create Room (POST)**: JSON object to create a new room.
- **Get All Rooms (GET)**: JSON array to get a list of all rooms.
- **Get Room by ID (GET)**: JSON object to get a room by its ID.
- **Update Room (PUT)**: JSON object to update an existing room.
- **Delete Room (DELETE)**: JSON object to delete a room by its ID.

You can use these JSON objects for testing CRUD operations on your `Room` model using tools like Postman or cURL.