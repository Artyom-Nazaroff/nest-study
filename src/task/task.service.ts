import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'Title 1',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Title 2',
      isCompleted: true,
    },
  ];

  findAll() {
    return this.tasks;
  }

  findById(id: number) {
    const task = this.tasks.find((el) => el.id === id);

    if (!task) {
      throw new NotFoundException("Task haven't found");
    }

    return task;
  }

  create() {
    const newTask = {
      id: this.tasks.length + 1,
      title: 'New Task',
      isCompleted: false,
    };

    this.tasks.push(newTask);

    return true;
  }
}
