import { renderHook } from '@testing-library/react-hooks';
import useUnmount from '../index';

describe('test useUnmount', () => {
  it('when fn call times', () => {
    const fn = jest.fn();
    const hook = renderHook(() => useUnmount(fn));

    expect(fn).toBeCalledTimes(0);

    hook.rerender();
    expect(fn).toBeCalledTimes(0);

    hook.unmount();
    expect(fn).toBeCalledTimes(1);
  });
});
