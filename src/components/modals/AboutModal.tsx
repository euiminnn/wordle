import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
      이 페이지는 nakosung님의 코드(Wordle의 clone의 한국어 변형판)에서 약간의 디자인과 단어 목록을 수정한 것입니다 -{' '}
        <a
          href="https://github.com/nakosung/wordle"
          className="underline font-bold"
        >
          nakosung님의 코드
        </a>{' '}
        그리고{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          오리지널 코드
        </a>
      </p>
    </BaseModal>
  )
}
