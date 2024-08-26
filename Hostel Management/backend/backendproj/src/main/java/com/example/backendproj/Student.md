Sure, here is the Markdown file containing all the JSON objects for testing CRUD operations with the `Student` model.

```markdown
# Student JSON Objects for CRUD Operations

## Create Student (POST)
```json
{
  "name": "John Doe",
  "allotBed": "B2",
  "mobile": "1234567890",
  "email": "john.doe@example.com",
  "dob": "2000-01-01",
  "address1": "123 Main St",
  "address2": "Apt 4B",
  "city": "New York",
  "state": "NY",
  "country": "USA",
  "photo": "path/to/photo.jpg"
}
```

## Get All Students (GET)
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "allotBed": "B2",
    "mobile": "1234567890",
    "email": "john.doe@example.com",
    "dob": "2000-01-01",
    "address1": "123 Main St",
    "address2": "Apt 4B",
    "city": "New York",
    "state": "NY",
    "country": "USA",
    "photo": "path/to/photo.jpg"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "allotBed": "C3",
    "mobile": "0987654321",
    "email": "jane.smith@example.com",
    "dob": "1999-02-15",
    "address1": "456 Oak St",
    "address2": "",
    "city": "Los Angeles",
    "state": "CA",
    "country": "USA",
    "photo": "path/to/photo2.jpg"
  }
]
```

## Get Student by ID (GET)
```json
{
  "id": 1,
  "name": "John Doe",
  "allotBed": "B2",
  "mobile": "1234567890",
  "email": "john.doe@example.com",
  "dob": "2000-01-01",
  "address1": "123 Main St",
  "address2": "Apt 4B",
  "city": "New York",
  "state": "NY",
  "country": "USA",
  "photo": "path/to/photo.jpg"
}
```

## Update Student (PUT)
```json
{
  "name": "John Doe",
  "allotBed": "B2",
  "mobile": "1234567890",
  "email": "john.doe@example.com",
  "dob": "2000-01-01",
  "address1": "123 Main St",
  "address2": "Apt 4B",
  "city": "New York",
  "state": "NY",
  "country": "USA",
  "photo": "path/to/photo.jpg"
}
```

## Delete Student (DELETE)
```json
{
  "id": 1
}
```

