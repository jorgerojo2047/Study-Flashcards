# Study-Flashcards

A modern, web-based flashcard application for studying technical concepts in software development, architecture, and cloud technologies.

## 🎯 Features

- **Interactive Flashcards**: Study with randomized question presentation
- **Smart Progress Tracking**: Monitor your learning progress with card counters
- **Keyboard Shortcuts**: Efficient navigation with hotkeys
- **Tag System**: Organized content with categorized topics
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Modern UI**: Clean, dark-themed interface with glass-morphism design

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Study-Flashcards
   ```

2. Open `index.html` in your web browser
3. Start studying! No build process or dependencies required.

## ⌨️ Keyboard Shortcuts

- **A** - Show/Hide Answer
- **N** - Next Card
- **K** - Mark as "I know it" (removes from deck)

## 🎮 Controls

- **Show Answer** - Reveal the answer to the current question
- **Next** - Move to the next random card
- **I know it** - Remove the current card from the deck (you've mastered it)
- **Restart Deck** - Reshuffle and restart the entire deck
- **Restart Index** - Go back to the beginning of the current deck

## 📚 Content Coverage

The flashcard deck contains **~315 cards** covering:

### Software Architecture
- Microservices vs Monolithic applications
- Event-Driven Architecture
- Service-Oriented Architecture (SOA)
- Load balancing and high availability
- Scalability and performance optimization

### Design Patterns & Principles
- SOLID principles
- Repository pattern
- CQRS (Command Query Responsibility Segregation)
- Dependency Injection
- Adapter pattern

### Cloud Technologies
- **AWS**: S3, IAM, CloudFront, EC2
- **Azure**: App Service, AKS, Cosmos DB
- Infrastructure as Code (Terraform, CloudFormation)

### Frontend Development
- **Angular**: Components, RxJS, routing, performance optimization
- **React**: Hooks, immutability, state management

### Backend & Databases
- **.NET**: Entity Framework, monitoring, best practices
- **Node.js**: Debugging, performance optimization
- **Databases**: SQL vs NoSQL, indexing, CAP theorem
- **General**: CORS, RESTful APIs, content delivery

### DevOps & Security
- Authentication vs Authorization
- Monitoring and logging
- Circuit breakers and resilience patterns
- API security and best practices

## 🏗️ Technical Implementation

- **Pure Web Technologies**: HTML5, CSS3, JavaScript (ES6+)
- **No Dependencies**: Runs entirely in the browser
- **Modern CSS**: CSS Grid, Flexbox, CSS Variables, glass-morphism effects
- **Responsive Design**: Mobile-first approach with media queries
- **Clean Architecture**: Modular JavaScript with clear separation of concerns

## 📁 Project Structure

```
Study-Flashcards/
├── index.html          # Main application interface
├── styles.css          # Modern dark-themed styling
├── questions.js        # Flashcard data (~315 cards)
└── README.md           # This file
```

## 🎨 Design Features

- **Dark Theme**: Easy on the eyes for extended study sessions
- **Glass-morphism**: Modern visual effects with subtle transparency
- **Typography**: Clean, readable Inter font family
- **Color Scheme**: Professional blue accent colors
- **Responsive**: Optimized for all screen sizes

## 🔧 Customization

To add your own flashcards, edit the `questions.js` file and add new objects to the `cards` array:

```javascript
{
  question: "Your question here?",
  answer: "Your detailed answer here.",
  tags: ["tag1", "tag2"]
}
```

## 📈 Learning Strategy

This tool is designed for:
- **Technical Interview Preparation**
- **Continuous Learning** of software development concepts
- **Spaced Repetition** with the "I know it" feature
- **Quick Reference** for key architectural patterns

## 🤝 Contributing

Feel free to contribute by:
- Adding new flashcards
- Improving the UI/UX
- Fixing bugs or typos
- Suggesting new features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Studying!** 🚀
