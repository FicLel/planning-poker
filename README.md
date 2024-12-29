# YetAnother Planning Poker

This project is open source tool for helping teams on planning,
## TASKS

## 1. Session Management
- [ ] Define a model for sessions, including properties such as session ID, name, and status (active/inactive).
- [ ] Implement logic to create a new session with configurable options (e.g., voting metric, anonymous voting).
- [ ] Enable joining an existing session using a unique session ID or URL.
- [ ] Add functionality to close a session once planning is complete.

## 2. Task Management
- [ ] Define a model for tasks, including properties such as task ID, name, description, and status (pending, completed).
- [ ] Create logic to add tasks to a session dynamically.
- [ ] Enable editing and deleting tasks during a session.
- [ ] Highlight the current task being estimated during the planning process.
- [ ] Implement drag-and-drop reordering for tasks.

## 3. Voting System
- [ ] Implement logic to cast a vote for a task using the selected metric.
- [ ] Enable participants to modify their vote before the reveal.
- [ ] Add functionality to reveal votes once all participants have cast theirs.
- [ ] Handle scenarios where participants do not vote within a specified time.

## 4. Metrics and Point Calculation
- [ ] Support predefined voting metrics (Fibonacci, T-shirt sizes, Powers of 2).
- [ ] Allow session organizers to define custom voting metrics.
- [ ] Calculate the average points for a task after voting is completed.
- [ ] Highlight outliers in voting results and provide visual indicators for discussion.

## 5. Real-time Updates
- [ ] Ensure that all session participants see real-time updates for task changes and voting progress.
- [ ] Notify participants when a new task is selected or a session's status changes.

## 6. CSV Import/Export
- [ ] Implement logic to import tasks from a CSV file, ensuring proper formatting and error handling.
- [ ] Enable exporting the completed task list with points as a CSV file.

## 7. Session History
- [ ] Maintain a history of completed tasks and their points for each session.
- [ ] Allow users to view and retrieve past session data for review.

## 8. Permissions and Roles
- [ ] Assign roles (e.g., organizer, participant) to session participants.
- [ ] Restrict certain actions (e.g., editing tasks, closing session) to organizers.

## 9. Notifications
- [ ] Notify participants of important events, such as task changes, vote reveals, and session closure.
- [ ] Allow customization of notification preferences for each session.

## 10. Error Handling
- [ ] Define clear error messages for common business logic errors (e.g., session not found, invalid vote).
- [ ] Add logic to gracefully handle invalid or incomplete task data during CSV import.

## 11. Customization and Settings
- [ ] Allow organizers to customize session settings, including voting duration and themes.
- [ ] Provide an option to enable or disable anonymous voting for each session.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
