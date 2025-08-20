import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const customClass = {
  danger: {
    actions: 'sweetAlertActions',
    confirmButton:
      'btn px-5 py-3 bg-red rounded-[10px] text-white mt-0 min-w-[6rem]',
    cancelButton:
      'btn px-5 py-3 rounded-[10px] bg-white text-black mt-0 min-w-[6rem]',
    title: 'swal-title',
  },
  primary: {
    actions: 'sweetAlertActions',
    confirmButton:
      'btn px-5 py-3 rounded-[10px] bg-p text-white mt-0 min-w-[6rem]',
    cancelButton: 'btn px-5 py-3 rounded-[10px] bg-p text-s mt-0 min-w-[6rem]',
    title: 'swal-title',
  },
};

export const DangerSwal = withReactContent(
  Swal.mixin({
    customClass: {
      actions: 'sweetAlertActions',
      confirmButton:
        'btn px-5 py-3 rounded-[10px] bg-s text-white mt-0 min-w-[6rem]',
      cancelButton:
        'btn px-5 py-3 rounded-[10px] bg-white text-black mt-0 min-w-[6rem]',
      title: 'swal-title',
      popup: 'swal-popUp',
    },
    buttonsStyling: false,
  })
);

export const ConfirmSwal = withReactContent(
  Swal.mixin({
    customClass: customClass.primary,
    buttonsStyling: false,
  })
);

export const SomethingWentWrongAlert = (message: string) => {
  return ConfirmSwal.fire({
    title: 'Something went wrong!',
    html: message,
    icon: 'error',
  });
};
