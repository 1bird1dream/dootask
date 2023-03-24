<?php


namespace App\Models;



use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\Models\ProjectTaskPushLog
 *
 * @property int $id
 * @property int|null $userid 用户id
 * @property int|null $task_id 任务id
 * @property int|null $type 提醒类型：0 任务开始提醒，1 距离到期提醒，2到期超时提醒
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskPushLog newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskPushLog newQuery()
 * @method static \Illuminate\Database\Query\Builder|ProjectTaskPushLog onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskPushLog query()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskPushLog whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskPushLog whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskPushLog whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskPushLog whereTaskId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskPushLog whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskPushLog whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskPushLog whereUserid($value)
 * @method static \Illuminate\Database\Query\Builder|ProjectTaskPushLog withTrashed()
 * @method static \Illuminate\Database\Query\Builder|ProjectTaskPushLog withoutTrashed()
 * @mixin \Eloquent
 */
class ProjectTaskPushLog extends AbstractModel
{
    use SoftDeletes;

}
