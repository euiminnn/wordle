import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        이 페이지는 nakosung님의 wordle(Wordle의 clone의 한국어 변형판)입니다 -{' '}
        <a
          href="https://github.com/nakosung/wordle"
          className="underline font-bold"
        >
          코드는 여기에
        </a>{' '}
        and{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          오리지널은 여기에서
        </a>
      </p>
    </BaseModal>
  )
}
