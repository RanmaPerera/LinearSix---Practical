-- Task 3.2: Select names of all empty test groups (group name starts with "TEST-")
SELECT name FROM group WHERE name LIKE 'TEST-%';

-- Task 3.3: Select user first names and last names for users that have Victor as a first name and are not members of any test groups
SELECT u.firstName, u.lastName
FROM user u
WHERE u.firstName = 'Victor'
AND u.id NOT IN (SELECT gm.userID FROM groupMembership gm WHERE gm.groupID IN (SELECT g.id FROM group g WHERE g.name LIKE 'TEST-%'));

-- Task 3.4: Select users and groups for which the user was created before the group for which they are a member
SELECT u.firstName AS UserName, g.name AS GroupName
FROM user u
JOIN groupMembership gm ON u.id = gm.userID
JOIN group g ON gm.groupID = g.id
WHERE u.created < g.created;
