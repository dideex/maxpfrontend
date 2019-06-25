const storeEnhancer = connect(
  (state: RootStore) => ({ ...state }),
  {
    init,
    inc,
    thunkAction: unboxThunk(thunkAction),
    authUser: unboxThunk(authUser),
  },
  null,
  { pure: false },
)

type AppProps = {} & TypeOfConnect<typeof storeEnhancer>


export const AuthContainer = () => {}
