import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Analytics')
@Controller('analytics')
export class AnalyticsController {
  
  @ApiOperation({ summary: 'Get overview metrics for admin dashboard' })
  @Get('overview')
  getOverview() {
    return {
      kpis: {
        totalUsers: 1420,
        monthlyRevenue: 28500,
        activeSessions: 142,
        completionRate: 94
      },
      growth: [
        { name: 'Mon', users: 40, revenue: 240 },
        { name: 'Tue', users: 30, revenue: 139 },
        { name: 'Wed', users: 20, revenue: 980 },
        { name: 'Thu', users: 27, revenue: 390 },
        { name: 'Fri', users: 18, revenue: 480 },
        { name: 'Sat', users: 23, revenue: 380 },
        { name: 'Sun', users: 34, revenue: 430 },
      ],
      categories: [
        { name: 'Software Engineering', value: 400 },
        { name: 'Design', value: 300 },
        { name: 'Marketing', value: 300 },
        { name: 'Product Management', value: 200 },
      ]
    };
  }
}
