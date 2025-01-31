```javascript
function MyComponent() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user data
    setTimeout(() => {
      setUser({ name: 'John Doe', email: 'john.doe@example.com' });
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
        </View>
      )}
    </View>
  );
}

//Alternative using optional chaining
function MyComponent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUser({ name: 'John Doe', email: 'john.doe@example.com' });
    }, 1000);
  }, []);

  return (
    <View>
      <Text>{user?.name}</Text>
      <Text>{user?.email}</Text>
    </View>
  );
}
```