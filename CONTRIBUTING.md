# Contributing to Hackathon Chronicles 🎉

Thank you for contributing to **Hackathon Chronicles**! Whether you’re adding a new challenge, fixing bugs, or improving documentation, your contribution helps make this project better for everyone. We appreciate your efforts in making **Hackathon Chronicles** an amazing repository for developers.

This document explains how to contribute to the project using our **branching system**. Please read through the steps below to get started.

---

## 🚀 Branching Workflow

### 1. **EDMain Branch (Locked)**

- **Purpose**: The **EDMain** branch contains the base project structure and default challenges. It is the **starting point** for any new challenges, and **no direct commits** should be made to it.
- **Important**: This branch is **locked** and serves as the foundation for all new challenge work.

### 2. **Challenge Branch**

- **Creation**: When a new challenge is proposed, a **Challenge Branch** will be created from **EDMain**. This branch will be named based on the challenge's name, duration, and programming language.
  - **Naming Convention**: `challenge-name-duration-language`
  - **Example**: `array-50-days-python`
  
- **Purpose**: This branch will contain the challenge-specific code and structure. It is where all related work will happen.

### 3. **User Branch**

- **Creation**: Once the **Challenge Branch** is created, contributors will create a new branch off of that challenge branch to work on their solutions.
  - **Naming Convention**: `your-username/challenge-name`
  - **Example**: `johnDoe/array-50-days-python`
  
- **Work**: You’ll work on your challenge in this user-specific branch and keep your commits focused on solving the challenge.

### 4. **Pull Request (PR)**

- **Creating a PR**: After completing the challenge or your solution, you will **raise a PR** from your **User Branch** to the **Challenge Branch**.
  - Example: PR from `johnDoe/array-50-days-python` to `array-50-days-python`.
  
- **Review Process**: A maintainer will review your PR. If everything looks good, it will be merged into the **Challenge Branch**.
  - **Note**: The PR will only be merged after **approval** to ensure all challenges are correctly implemented.

---

## 🛠️ How to Get Started

### Fork and Clone the Repository

1. **Fork the Repository**  
   Click on the "Fork" button at the top-right of the repository page to create a copy of the project under your GitHub account.

2. **Clone the Repository**  
   Clone your fork to your local machine:
   
```bash
git clone https://github.com/Enthusiastic-Developer/Hackathon_Chronicles
cd hackathon-chronicles
```

## Create Your Branch

### 1. **Create a New Branch**

Always create a new branch from EDMain to begin work. This ensures that you're starting from the latest version of the project.
```bash
git checkout EDMain
git pull origin EDMain
git checkout -b your-branch-name
```

### 2. **Work on the Challenge**

- When you’re working on a challenge, ensure that the Challenge Branch is created first, based on the challenge's name and details.
- Example Challenge Branch: `array-50-days-python`

### 3. **Commit Changes**

Commit your changes with meaningful messages:
``` bash
git commit -m "Completed the array challenge for 50 days"
```

### 4. **Push Your Branch**

Push your branch to your fork:

```bash
git push origin your-branch-name
```

## Raise a Pull Request

### 1. **Create a PR**

Once your solution is ready, raise a PR from your User Branch to the Challenge Branch on GitHub.

Example: PR from `johnDoe/array-50-days-python` to `array-50-days-python`.

### 2. **Create a PR**

A maintainer will review your PR and provide feedback. If everything is good, the PR will be approved and merged.

## 📝PR Guidelines

- **Descriptive Commit Messages**: Always provide descriptive commit messages to help reviewers understand the changes you've made.
- **No Direct Changes to EDMain**: You should never commit directly to the EDMain branch. All work should begin from the **Challenge Branch**.
- **Code Quality**: Ensure your code is clean, well-commented, and adheres to the project’s style.
- **Testing**: If applicable, ensure that your code works as expected, and any relevant tests are included.

## 🌟Code of Conduct

By contributing to this project, you agree to follow our [Code of Conduct](https://github.com/Enthusiastic-Developer/Hackathon_Chronicles/blob/EDMain/CODE_OF_CONDUCT.md). Please make sure that your contributions uphold the spirit of respect and inclusivity.

If you observe any violations of this code, please report them via the issue tracker.

## 🤝Need Help?

If you have any questions or are unsure about the process, feel free to ask. You can:

- Open an issue on GitHub.
- Contact a maintainer directly.
- Check our [GitHub Discussions](https://github.com/Enthusiastic-Developer/Hackathon_Chronicles/discussions) for FAQs and community support.
  
We’re happy to help, and we’re excited to have you on board!

## 🏆Thank You!

Your contributions help us make Hackathon Chronicles better for everyone. We appreciate your time and effort. Together, we’re building something amazing! 🚀

Happy coding and have fun with the challenges! 🎉
