import prismaClient from "packages/core-service/src/app/config/database";
import { ResponseError } from "shared";

export class GroupService {
  static async create(groupData: any) {
    // Group creation logic here
  }

  static async findMany() {
    // Get all groups logic here
    return await prismaClient.group.findMany();
  }

  static async findById(groupId: number) {
    // Get group by ID logic here
    return await prismaClient.group.findUnique({
      where: {
        id: groupId
      }
    });
  }

  static async updateOne(groupId: number, groupData: any) {
    // Update group logic here
  }

  static async deleteOne(groupId: number) {
    // Delete group logic here
  }

  static async getGroupByName(groupName: string) {
    // Get group by name logic here
    const group = await prismaClient.group.findUnique({
      where: {
        name: groupName
      }
    });

    if (!group) {
      const userGroup = await prismaClient.group.findFirst({
        where: {
          name: 'USER'
        }
      });
      if (!userGroup) {
        throw new ResponseError(500, "Default USER group not found. Please create it first.");
      }
      return userGroup;
    }
    return group;
  }
}