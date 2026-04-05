import { useMutation, useQueryClient } from 'react-query';

const useOptimisticPermissionUpdate = (updatePermission) => {
  const queryClient = useQueryClient();

  return useMutation(updatePermission, {
    // Optimistic update on mutation
    onMutate: async (newPermission) => {
      await queryClient.cancelQueries('permissions');

      const previousPermissions = queryClient.getQueryData('permissions');

      // Optimistically update to the new value
      queryClient.setQueryData('permissions', (old) => 
        old.map((permission) => 
          permission.id === newPermission.id ? { ...permission, ...newPermission } : permission
        )
      );

      return { previousPermissions };
    },
    // Rollback in case of error
    onError: (err, newPermission, context) => {
      queryClient.setQueryData('permissions', context.previousPermissions);
    },
    // Invalidate cache after success
    onSettled: () => {
      queryClient.invalidateQueries('permissions');
    },
  });
};

export default useOptimisticPermissionUpdate;