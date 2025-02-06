import { ReactElement, useState } from 'react'

const useForms = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const stepForward = () => {
      setCurrentStepIndex(i => {
          if (i >= steps.length - 1) return i;
          return i + 1;
      });
  };

  const stepBack = () => {
      setCurrentStepIndex(i => {
          if (i <= 0) return i;
          return i - 1;
      });
  };

  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    steps,
    currentStepIndex,
    currentStep: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    stepForward,
    stepBack,
  }
}

export default useForms;